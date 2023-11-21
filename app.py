from flask import Flask
import os

app = Flask(__name__, static_folder='')

text = ''
for root, dirs, files in os.walk('.'):
    if '.git' in root:
        continue
    level = root.replace('.', '').count(os.sep)
    indent = '&ensp;' * 4 * (level)
    text += '{}<b>{}</b>/<br>'.format(indent, os.path.basename(root))
    subindent = '&ensp;' * 4 * (level + 1)
    for f in files:
        text += '{}{}<br>'.format(subindent, f)


@app.route('/')
def landing():
    return text


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5001', debug=True)