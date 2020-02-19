var code = arguments[0]
setCaptchaCode(code)

function setCaptchaCode(code) {
	let ele = document.getElementById("g-recaptcha-response");
	if(ele != null){
		// uncomment this to show the textarea
		// ele.style.display = "block";
		ele.innerHTML = code;

		bitir(code);

		//afterElement.closest('form').submit();

	}
}

function bitir(code)
{
	var taskSolution=code;

	var injectedCode = "(" + function(taskSolution) {
                    var recaptchaCallbackAlreadyFired = false;

                    var recursiveCallbackSearch = function(object, solution, currentDepth, maxDepth) {
                        if (recaptchaCallbackAlreadyFired) {
                            return
                        }
                        var passedProperties = 0;
                        for (var i in object) {
                            passedProperties++;
                            if (passedProperties > 15) {
                                break
                            }
                            try {
                                if (typeof object[i] == "object" && currentDepth <= maxDepth) {
                                    recursiveCallbackSearch(object[i], solution, currentDepth + 1, maxDepth)
                                } else if (i == "callback") {
                                    if (typeof object[i] == "function") {
                                        recaptchaCallbackAlreadyFired = true;
                                        object[i](solution)
                                    } else if (typeof object[i] == "string" && typeof window[object[i]] == "function") {
                                        recaptchaCallbackAlreadyFired = true;
                                        window[object[i]](solution)
                                    }
                                    return
                                }
                            } catch (e) {}
                        }
                    };

                    if (!recaptchaCallbackAlreadyFired) {
                        if (typeof ___grecaptcha_cfg != "undefined" && typeof ___grecaptcha_cfg.clients != "undefined") {
                            var oneVisibleRecaptchaClientKey = null;
                            visible_recaptcha_element_search_loop: for (var i in ___grecaptcha_cfg.clients) {
                                for (var j in ___grecaptcha_cfg.clients[i]) {
                                    if (___grecaptcha_cfg.clients[i][j] && typeof ___grecaptcha_cfg.clients[i][j].nodeName == "string" && typeof ___grecaptcha_cfg.clients[i][j].innerHTML == "string" && typeof ___grecaptcha_cfg.clients[i][j].innerHTML.indexOf("iframe") != -1) {
                                        if (___grecaptcha_cfg.clients[i][j].offsetHeight != 0 || ___grecaptcha_cfg.clients[i][j].childNodes.length && ___grecaptcha_cfg.clients[i][j].childNodes[0].offsetHeight != 0 || ___grecaptcha_cfg.clients[i][j].dataset.size == "invisible") {
                                            if (oneVisibleRecaptchaClientKey === null) {
                                                oneVisibleRecaptchaClientKey = i;
                                                break
                                            } else {
                                                oneVisibleRecaptchaClientKey = null;
                                                break visible_recaptcha_element_search_loop
                                            }
                                        }
                                    }
                                }
                            }
                            if (oneVisibleRecaptchaClientKey !== null) {
                                recursiveCallbackSearch(___grecaptcha_cfg.clients[oneVisibleRecaptchaClientKey], taskSolution, 1, 2)
                            }
                        }
                    }
                } + ')("' + taskSolution + '");';
                var script = document.createElement("script");
				script.textContent = injectedCode;
                (document.head || document.documentElement).appendChild(script);
                script.remove();
				}