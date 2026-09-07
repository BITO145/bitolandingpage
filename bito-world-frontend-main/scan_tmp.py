import re, glob, os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src')

css = open(os.path.join(ROOT, 'styles/index.css')).read()
css_nc = re.sub(r'/\*.*?\*/', '', css, flags=re.S)

# collect only *class selectors actually used in CSS rules* (skip url())
urls = set(re.findall(r'url\([^)]*\)', css_nc))
class_names = set()
for m in re.finditer(r'\.([A-Za-z_][A-Za-z0-9_-]+)', css_nc):
    class_names.add(m.group(1))
for u in urls:
    for m in re.finditer(r'\.([A-Za-z_][A-Za-z0-9_-]+)', u):
        class_names.discard(m.group(1))

files = []
for ext in ('jsx', 'js', 'html'):
    files += glob.glob(ROOT + '/**/*.' + ext, recursive=True)

usage = {}
for f in files:
    try:
        txt = open(f).read()
    except Exception:
        continue
    found = set()
    for c in class_names:
        if re.search(r'["\'\s=]' + re.escape(c) + r'["\'\s]', txt):
            found.add(c)
    if found:
        usage[f] = sorted(found)

total_cls = 0
for f in sorted(usage):
    rel = os.path.relpath(f, ROOT)
    print(rel + ': ' + str(len(usage[f])))
    total_cls += len(usage[f])
print('---')
print('FILES:', len(usage), 'TOTAL-USAGES:', total_cls)
print('---ALL CLASSES STILL USED---')
allu = sorted(set(c for v in usage.values() for c in v))
print(', '.join(allu))
