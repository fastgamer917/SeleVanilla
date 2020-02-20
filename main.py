from twocaptcha import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from time import sleep
from solvedbc import *


driver = webdriver.Firefox()
# opening firefox and navigating

driver.get("https://balance.vanillagift.com")
sleep(2)
#slowdown = input("enter anything to continue")
element = WebDriverWait(driver, 60).until(EC.presence_of_element_located((By.ID, "cardnumber")))
print("cardnum id found")
ele = driver.find_element_by_id("cardnumber")
ele.send_keys("4847188208143752")
sleep(2)
ele = driver.find_element_by_id("expMonth")
ele.send_keys("05")
sleep(2)
ele = driver.find_element_by_id("expirationYear")
ele.send_keys("23")
sleep(2)
ele = driver.find_element_by_id("cvv")
ele.send_keys("658")
sleep(2)
print("solving captcha")
# result = twocaptcha("621c58aaec476f4a0189c95b8f579235","6LcCe6EUAAAAABe_J3jua3SnvvZbwFqY5B7Z-GD5","https://balance.vanillagift.com")
result = solvedbc()
print("captcha received. submitting")
print(result)
driver.execute_script(open("submitcaptcha.js").read(), result)
sleep(2)
ele = driver.find_element_by_id("brandLoginForm_button")
ele.click()

#scraping starts from here:

element = WebDriverWait(driver, 60).until(EC.presence_of_element_located((By.ID, "Avlbal")))
sleep(2)

#balance = driver.execute_script('return document.getElementById("Avlbal").innerText')

balance = driver.find_element_by_id("Avlbal").text
print(balance)

