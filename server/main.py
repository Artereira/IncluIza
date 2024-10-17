from flask import Flask, render_template
import json

app = Flask(__name__, template_folder='../templates', static_folder="../static")

@app.route("/")
def root():

if __name__ == "__main__":
    app.run(host="localhost", debug=True)

@app.route("data/comida")
def get_comida():
    with open('./data/comida.json', 'r') as file:
        data = json.load(file)

        print(data)

    return render_template('index.html')