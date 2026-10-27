# Import an example app without starting its web page, so its functions can be run on real files.
import sys, types, gradio as gr
gr.Interface.launch = lambda self, *a, **k: None
def load(path):
    m = types.ModuleType("app"); m.__file__ = path
    exec(compile(open(path).read(), path, "exec"), m.__dict__)
    return m
