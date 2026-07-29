#!/usr/bin/env python3
"""Regenerate the two website QR codes.

    pip install qrcode
    python3 assets/qr/generate.py

Change URL below if the site ever moves to its own domain, then re-run and
re-test — a QR code that does not scan is worse than no QR code at all.

Design decisions here are the result of measuring, not taste. Three "designer"
treatments were tried and thrown out because ZBar — the decoder most phone
scanners are built on — could not read them:

  * Gold modules on the black brand background. The QR standard assumes dark
    modules on a light field; a decoder that does not try inverting sees
    nothing at all.
  * Circular dots with gaps between them. ZBar measures run lengths along scan
    lines, and the gaps destroy the 1:1:3:1:1 ratio it uses to find the code.
  * Rounded, stylised finder patterns. Same reason, and worse: those three
    squares are exactly what a decoder locks onto first. This one failed at
    every size tested.

What survived: square touching modules, untouched finder patterns, dark on a
warm sand field. The brand shows up in the sand, the gold frame and the mark in
the middle — none of which sit on functional data.

Error correction is M. The centre knockout covers about 3% of the area, well
inside M's 15% budget, and M keeps the grid at 41 modules instead of H's 49,
which is what makes the code still readable when printed small.
"""
import pathlib
import re

import qrcode
from qrcode.constants import ERROR_CORRECT_M

URL = 'https://lassetoenjann.github.io/mylombokdriver/'
HERE = pathlib.Path(__file__).parent
QUIET = 4                      # quiet zone in modules; 4 is the spec minimum
INK, SAND = '#08080A', '#F8F4EC'


def matrix():
    q = qrcode.QRCode(error_correction=ERROR_CORRECT_M, border=QUIET, box_size=1)
    q.add_data(URL)
    q.make(fit=True)
    return q.get_matrix()


def modules(m, n):
    return ''.join(f'<rect x="{x}" y="{y}" width="1" height="1"/>'
                   for y in range(n) for x in range(n) if m[y][x])


def write_plain(path):
    m = matrix()
    n = len(m)
    path.write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" '
        f'width="{n * 16}" height="{n * 16}" shape-rendering="crispEdges" '
        f'role="img" aria-label="QR code linking to {URL}">'
        f'<title>My Lombok Driver — website QR code</title>'
        f'<rect width="{n}" height="{n}" fill="#FFFFFF"/>'
        f'<g fill="#000000">{modules(m, n)}</g></svg>', encoding='utf-8')
    return n


def write_brand(path, logo_size=7.0):
    m = matrix()
    n = len(m)
    inner = re.sub(r'</svg>\s*$', '',
                   re.sub(r'<svg[^>]*>', '',
                          (HERE.parent / 'logo-mark.svg').read_text(encoding='utf-8').strip(),
                          count=1))
    c = (n - logo_size) / 2
    path.write_text(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" width="{n * 16}" height="{n * 16}" shape-rendering="crispEdges" role="img" aria-label="QR code linking to {URL}">
<title>My Lombok Driver — website QR code</title>
<defs><linearGradient id="qrGold" x1="0" y1="0" x2="0.35" y2="1">
<stop offset="0%" stop-color="#FDF3B8"/><stop offset="34%" stop-color="#E9C971"/>
<stop offset="68%" stop-color="#C08F2C"/><stop offset="100%" stop-color="#8C5F14"/>
</linearGradient></defs>
<rect width="{n}" height="{n}" rx="2.5" fill="{SAND}"/>
<rect x="1.1" y="1.1" width="{n - 2.2}" height="{n - 2.2}" rx="1.8" fill="none" stroke="url(#qrGold)" stroke-width="0.8" shape-rendering="geometricPrecision"/>
<g fill="{INK}">{modules(m, n)}</g>
<circle cx="{n / 2}" cy="{n / 2}" r="{logo_size / 2}" fill="{SAND}" shape-rendering="geometricPrecision"/>
<circle cx="{n / 2}" cy="{n / 2}" r="{logo_size / 2 - 0.28}" fill="{INK}" shape-rendering="geometricPrecision"/>
<g shape-rendering="geometricPrecision" transform="translate({c + logo_size * 0.15:.3f},{c + logo_size * 0.15:.3f}) scale({logo_size * 0.70 / 200:.6f})">{inner}</g>
</svg>''', encoding='utf-8')
    return n


if __name__ == '__main__':
    a = write_plain(HERE / 'qr-plain.svg')
    b = write_brand(HERE / 'qr-brand.svg')
    print(f'qr-plain.svg  {a}x{a} modules')
    print(f'qr-brand.svg  {b}x{b} modules')
    print(f'both encode: {URL}')
