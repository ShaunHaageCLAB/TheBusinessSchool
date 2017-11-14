var BS = {
    config : {

    },  
    init : function() { 

        var $cache = {

		};


		$('.js-slideshow-homepage-intro').slick();
		
		$('.js-slideshow-testimonials').slick(); 

        $("#btn_Search").click(function () {
            var Term = $("#txt_Search").val();
            FindProgramme(Term);
            FindCampus(Term);
            FindContent(Term);
            FindArticle(Term); 

            if (CheckIfNoSearchResults() == true) {
                $("#NotFound").hide();
            }
            else {
                $("#NotFound").show();
            }
        });

        $("#btn_subscribe").click(function () {
            var Email = $("#txt_email").val();

            var url = "/webservices/application.asmx/AddMailingList";
            $.ajax({
                type: "POST",
                url: url,
                async: false,
                data: "{Email:'" + Email + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    if (data.d == "Sent") {
                        window.location.href = window.location.href + "?MailingList=Sent";
                    }
                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    console.log(xmlHttpRequest.responseText);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });

            //window.location.href = window.location.href + "?MailingList=Sent";
        });

        $("#txt_Search").keyup(function (event) {
            if (event.keyCode == 13) {
                $("#btn_Search").click();
            }
        });


        // Footer Call Me
        $("#btn_CallMeBack").click(function () {
            $('.call-me').toggle();
            $('.CallChat').hide();
            $('#edit-submitted-call-me-campus option:eq(0)').addClass('aaaa');

            return false;
        });


        $('.nav-search').on('click', function () {
            $('#txt_Search').focus();
        })


        $(".modal-fullscreen").on('show.bs.modal', function () {
            setTimeout(function () {
                $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
                $(".modal-fullscreen input").focus();
            }, 0);
            $(".btn-red").css({ "z-index": "1000" });
        });
        $(".modal-fullscreen").on('hidden.bs.modal', function () {
            $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
            $(".btn-red").css({ "z-index": "5000" });
        });
        

        var maxTime = 2000; // 2 seconds
        var time = 0;

        var interval = setInterval(function () {
            if ($('.dropdown-full .dropdown-menu').is(':visible')) {
                // visible, do something
                $(".dropdown-full .dropdown-menu").css({ "height": $(window).height() - 70, "overflow": "auto" });
                clearInterval(interval);
            } else {
                if (time > maxTime) {
                    // still hidden, after 2 seconds, stop checking
                    clearInterval(interval);
                    return;
                }

                // not visible yet, do something
                time += 100;
            }
        }, 200);


    }
}


$(document).ready(BS.init());




function FindProgramme(Term) {
    $("#ProgrammeSearchList").empty();
    var url = "/webservices/application.asmx/FindProgramme";
    $.ajax({
        type: "POST",
        url: url,
        data: "{Term:'" + Term + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data) {
            var Html;

            $.each(data.d, function (k, v) {
                Html = "<li><a href=\"" + v.Url + "\">" + v.Title + "</a></li>";

                $("#ProgrammeSearchList").append(Html);
                Html = "";

            })

            if (data.d == '') {
                $("#ProgrammeHeaderSearch").hide();
            }
            else {
                $("#ProgrammeHeaderSearch").show();
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
function FindCampus(Term) {
    $("#CampusSearchList").empty();
    var url = "/webservices/application.asmx/FindCampus";
    $.ajax({
        type: "POST",
        url: url,
        data: "{Term:'" + Term + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data) {
            var Html;

            $.each(data.d, function (k, v) {
                Html = "<li><a href=\"" + v.Url + "\">" + v.Title + "</a></li>";

                $("#CampusSearchList").append(Html);
                Html = "";

            })

            if (data.d == '') {
                $("#CampusHeaderSearch").hide();
            }
            else {
                $("#CampusHeaderSearch").show();
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
function FindContent(Term) {
    $("#ContentSearchList").empty();
    var url = "/webservices/application.asmx/FindContent";
    $.ajax({
        type: "POST",
        url: url,
        data: "{Term:'" + Term + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data) {
            var Html;

            $.each(data.d, function (k, v) {
                Html = "<li><a href=\"" + v.Url + "\">" + v.Title + "</a></li>";

                $("#ContentSearchList").append(Html);
                Html = "";

            })

            if (data.d == '') {
                $("#ContentHeaderSearch").hide();
            }
            else {
                $("#ContentHeaderSearch").show();
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
function FindArticle(Term) {
    $("#ArticleSearchList").empty();
    var url = "/webservices/application.asmx/FindArticle";
    $.ajax({
        type: "POST",
        url: url,
        data: "{Term:'" + Term + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data) {
            var Html;

            $.each(data.d, function (k, v) {
                Html = "<li><a href=\"" + v.Url + "\">" + v.Title + "</a></li>";

                $("#ArticleSearchList").append(Html);
                Html = "";

            })

            if (data.d == '') {
                $("#ArticleHeaderSearch").hide();
            }
            else {
                $("#ArticleHeaderSearch").show();
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log(xmlHttpRequest.responseText);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
function CheckIfNoSearchResults() {
    var result = false;
    if ($('#ProgrammeSearchList li').length != 0) {
        result = true;
    }
    if ($('#CampusSearchList li').length != 0) {
        result = true;
    }
    if ($('#ContentSearchList li').length != 0) {
        result = true;
    }
    if ($('#ArticleSearchList li').length != 0) {
        result = true;
    }
    return result;
}

function SubmitCallMeBack() {
    if (ValidateSubmit()) {
        $.ajax(
            {
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify({
                    Name: $('#txt_CallBackName').val(),
                    Number: $('#txt_CallBackMobile').val(),
                    CampusID: $("#cb_CallBackCampus option:selected").val(),
                    Campus: $("#cb_CallBackCampus option:selected").text()
                }),
                url: '/webservices/application.asmx/CallMeBackRequest',
                success: function (result) {
                    window.location.href = '/call-me-back-thank-you';
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
    }
}

function SubmitCallMeBackp() {
    if (ValidateSubmitp()) {
        $.ajax(
            {
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify({
                    Name: $('#call-course-name').val(),
                    Number: $('#call-course-mobile').val(),
                    CampusID: $("#call-course-campus option:selected").val(),
                    Campus: $("#call-course-campus option:selected").text()
                }),
                url: '/webservices/application.asmx/CallMeBackRequest',
                success: function (result) {
                    window.location.href = '/call-me-back-thank-you';
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
    }
}

function ValidateSubmitp() {
    if ($('#call-course-name').val() == '') {
        alert('Please enter your name');
        return false;
    }
    if ($('#call-course-mobile').val() == '') {
        alert('Please enter your contact number');
        return false;
    }
    if ($('#call-course-campus').val() == '0') {
        alert('Please select a campus');
        return false;
    }

    return true;
}

function ValidateSubmit() {
    if ($('#txt_CallBackName').val() == '') {
        alert('Please enter your name');
        return false;
    }
    if ($('#txt_CallBackMobile').val() == '') {
        alert('Please enter your contact number');
        return false;
    }
    if ($('#cb_CallBackCampus').val() == '0') {
        alert('Please select a campus');
        return false;
    }

    return true;
}


