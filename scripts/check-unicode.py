#!/usr/bin/env python3
import os, sys

dist = os.path.join(os.path.dirname(__file__), "..", "dist")
found = False
for dirpath, _, filenames in os.walk(dist):
    for fn in filenames:
        if not fn.endswith((".html", ".txt")):
            continue
        path = os.path.join(dirpath, fn)
        with open(path, "rb") as f:
            raw = f.read()
        count = raw.count(b"\xef\xbf\xbd")
        if count:
            print(f"U+FFFD found in {path}: {count} occurrences")
            found = True

if found:
    print("ERROR: U+FFFD replacement characters detected in build output. Fix encoding issues before deploying.")
    sys.exit(1)
else:
    print("OK: No U+FFFD replacement characters found in build output.")
