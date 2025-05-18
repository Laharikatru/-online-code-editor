from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/run', methods=['POST'])
def run_code():
    data = request.get_json()
    code = data.get("code")

    try:
        with open("temp.py", "w") as f:
            f.write(code)

        result = subprocess.run(["python", "temp.py"], capture_output=True, text=True, timeout=5)

        return jsonify({
            "output": result.stdout,
            "error": result.stderr
        })

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
