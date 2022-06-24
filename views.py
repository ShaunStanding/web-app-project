from flask import render_template, Blueprint
views = Blueprint("views", __name__)



@views.route("/")
def home():
    return render_template("index.html")

@views.route("/contact")
def contact():
    return render_template("contact.html")

@views.route("/login_register")
def login_register():
    return render_template("login_register.html")

@views.route("/store")
def store():
    return render_template("store.html")

@views.route("/about")
def about():
    return render_template("about.html")