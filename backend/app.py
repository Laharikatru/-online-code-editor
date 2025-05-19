from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/run', methods=['POST'])
def run_code():
    data = request.get_json()
    code = data.get('code', '')

    try:
        # Write code to a temporary file
        with open('temp.py', 'w') as f:
            f.write(code)

        # Execute the code
        result = subprocess.run(['python', 'temp.py'], capture_output=True, text=True, timeout=5)

        return jsonify({
            'output': result.stdout,
            'errors': result.stderr
        })
    except subprocess.TimeoutExpired:
        return jsonify({
            'output': '',
            'errors': 'Execution timed out.'
        })
    except Exception as e:
        return jsonify({
            'output': '',
            'errors': str(e)
        })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
