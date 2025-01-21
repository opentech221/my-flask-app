from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def accueil():
    return render_template('index.html')
def fonctionalite():
    return render_template('fonctionalite.html')
def tarif():
    return render_template('tarif.html')
def Desactive():
    return render_template('Desactive.html')

if __name__ == '__main__':
    app.run(debug=True)