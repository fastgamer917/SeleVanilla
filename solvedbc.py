def solvedbc():
    import dbc
    import json
    # Put your DBC account username and password here.
    username = "username"
    password = "password"

    # Put the proxy and reCaptcha token data
    Captcha_dict = {
        'googlekey': '6LcCe6EUAAAAABe_J3jua3SnvvZbwFqY5B7Z-GD5',
        'pageurl': 'https://balance.vanillagift.com'}

    # Create a json string
    json_Captcha = json.dumps(Captcha_dict)

    # client = dbc.SocketClient(username, password)
    # to use http client client = dbc.HttpClient(username, password)
    client = dbc.HttpClient(username, password)

    try:
        balance = client.get_balance()

        # Put your CAPTCHA type and Json payload here:
        captcha = client.decode(type=4, token_params=json_Captcha)
        if captcha:
            # The CAPTCHA was solved; captcha["captcha"] item holds its
            # numeric ID, and captcha["text"] item its list of "coordinates".
            # print("CAPTCHA %s solved: %s" % (captcha["captcha"], captcha["text"]))
            return captcha["text"]


    except dbc.AccessDeniedException:
        # Access to DBC API denied, check your credentials and/or balance
        print("error: Access to DBC API denied," +
              "check your credentials and/or balance")