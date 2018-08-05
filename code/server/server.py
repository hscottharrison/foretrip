from flask import Flask, render_template

app = Flask(__name__, static_folder="../static/dist", template_folder="../static/public")

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/hello")
def hello():
	return "Hello, react. I'm Python."

if __name__ == "__main__":
	app.run()