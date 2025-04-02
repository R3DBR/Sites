from flask import Flask, render_template

app = Flask(__name__, template_folder='../Html', static_folder='../')

@app.route('/')
def home():
    return render_template('pag_inicial.html', message="Ola")

if __name__ == '__main__':
    app.run(debug=True)
