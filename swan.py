import requests
payload = {'email':'are_you_hiring_interns@protonmail.com'}
for i in range(0,1000):
    r = requests.post('http://localhost/DBMS/index.php',data=payload)
    print(i)
