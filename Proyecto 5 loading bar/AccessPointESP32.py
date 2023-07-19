# Complete project details at https://RandomNerdTutorials.com
"""
try:
  import usocket as socket
except:
  import socket

import network

import esp
esp.osdebug(None)

import gc
gc.collect()

ssid = 'MicroPython-AP'
password = '123456789'

ap = network.WLAN(network.AP_IF)
ap.active(True)
ap.config(essid=ssid, password=password)

while ap.active() == False:
  pass

print('Connection successful')
print(ap.ifconfig())

def web_page():
 #   html_p1 = <html><head><meta name="viewport" content="width=device-width, initial-scale=1"><title>Access Point esp32</title> <style>html {font-family: Helvetica;
  #              display: inline-block; margin: 0px auto; text-align: center;}.button { background-color: #4CAF50; border: none; color: white; padding: 16px 40px;text-decoration: none;
   #             font-size: 30px; margin: 2px; cursor: pointer;}.button2 {background-color: #555555;border: none; color: white; padding: 16px 40px;text-decoration: none; font-size: 30px;
    #            margin: 2px; cursor: pointer;}</style></head>
     #       

 #   html_p2 = html_p1 + <body><h1>Hello, World!</h1><p>GPIO 26 - State </p><p><a><button class=button>ON</button></a></p><p>GPIO 27 - State </p>
  #              <p><a><button class=button2>ON</button></a></p></body></html>

    return html_p2

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('', 80))
s.listen(5)

while True:
  conn, addr = s.accept()
  print('Got a connection from %s' % str(addr))
  request = conn.recv(1024)
  print('Content = %s' % str(request))
  response = web_page()
  conn.send(response)
  conn.close()"""


import network
import utime

wf = network.WLAN(network.STA_IF)
wf.active(True)
lista = wf.scan()
for red in lista:
  print(red[0])

wf.connect("Labis_5GHz", "qgfhyxkmxp")

while not wf.isconnected():
  print(".")
  utime(1)


print(wf.isconfig()[0])