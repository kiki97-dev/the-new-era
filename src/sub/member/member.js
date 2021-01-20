$(document).ready(function () {

    $("input[type=submit]").on("click", function (e) {

        if (!nameact()) e.preventDefault();
        if (!agencyact()) e.preventDefault();
        if (!telact()) e.preventDefault();
        if (!genderact()) e.preventDefault();
        if (!postal_codeact()) e.preventDefault();
        if (!addressact()) e.preventDefault();
        if (!loginidact()) e.preventDefault();
        if (!pwdact()) e.preventDefault();

    })

    function nameact() {
        var num = /[0-9]/;
        var spc = /[~!@#$%^&*()_+{}:"<>?|]/;
        var name = $("#name").val();
        var isValidate = false;
        var error = $(".infotable tbody tr").eq(0).find("th label span");

        if (name == "") {
            error.addClass("error");
            $("#name").addClass("error");
            return isValidate;

        } else {
            if (num.test(name) || spc.test(name)) {
                alert("이름에 숫자, 특수문자를 입력할 수 없습니다");
                error.addClass("error");
                $("#name").addClass("error");
                return isValidate;
            } else {
                error.removeClass("error");
                $("#name").removeClass("error");
                isValidate = true;
                return isValidate;
            }
        }

    }

    function agencyact() {
        var agency = $("input[name=agency]").is(":checked");
        var isValidate = false;
        var error = $(".infotable tbody tr").eq(2).find("th label span");
        var p_error = $(".infotable tbody tr").eq(2).find("td p");


        if (agency) {
            error.removeClass("error");
            p_error.removeClass("error");
            isValidate = true;
            return isValidate;
        } else {
            p_error.addClass("error");
            error.addClass("error");
            return isValidate;
        }

    }

    function telact() {
        var tel = $("input[type=tel]").val();
        var tel2 = $("input[type=tel]").eq(1).val();
        var num = /[0-9]/;
        var isValidate = false;
        var error = $(".infotable tbody tr").eq(3).find("th label span");

        if (tel == "" || tel2 == "") {
            $("input[type=tel]").addClass("error");
            error.addClass("error");
            return isValidate;

        } else {
            if (num.test(tel)) {
                error.removeClass("error");
                $("input[type=tel]").removeClass("error");
                isValidate = true;
                return isValidate;
            } else {
                $("input[type=tel]").addClass("error");
                error.addClass("error");
                alert("휴대폰번호는 숫자만 입력가능합니다");
                return isValidate;
            }
        }
    }

    function genderact() {
        var gender = $("input[name=gender]").is(":checked");
        var isValidate = false;
        var error = $(".infotable tbody tr").eq(4).find("th label span");
        var p_error = $(".infotable tbody tr").eq(4).find("td p");


        if (gender) {
            p_error.removeClass("error");
            error.removeClass("error");
            isValidate = true;
            return isValidate;
        } else {
            p_error.addClass("error");
            error.addClass("error");
            return isValidate;
        }
    }

    function postal_codeact() {
        var num = /[0-9]/;
        var spc = /[~!@#$%^&*()_+{}:"<>?|]/;
        var postal_code = $("#postal_code").val();
        var isValidate = false;
        var error = $(".infotable tbody tr").eq(6).find("th label span");


        if (postal_code == "") {
            $("#postal_code").addClass("error");
            error.addClass("error");
            return isValidate;

        } else {
            if (!num.test(postal_code) || spc.test(postal_code)) {
                $("#postal_code").addClass("error");
                error.addClass("error");
                alert("우편번호에 문자, 특수문자를 입력할 수 없습니다");
                return isValidate;
            } else {
                $("#postal_code").removeClass("error");
                error.removeClass("error");
                isValidate = true;
                return isValidate;
            }
        }


    }

    function addressact() {
        var address = $("#address").val();
        var address_detail = $("#address_detail").val();
        var isValidate = false;
        var error = $(".infotable tbody tr").eq(6).find("th label span");


        if (address == "" || address_detail == "") {
            error.addClass("error");
            $("#address").addClass("error");
            $("#address_detail").addClass("error");
            return isValidate;

        } else {
            error.removeClass("error");
            $("#address").removeClass("error");
            $("#address_detail").removeClass("error");
            isValidate = true;
            return isValidate;
        }

    }

    function loginidact() {
        var eng = /[a-zA-z]/;
        var spc = /[@]/;
        var loginid = $("#loginid").val();
        var isValidate = false;
        var error = $(".logintable tbody tr").eq(0).find("th label span");


        if (loginid == "") {
            $("#loginid").addClass("error");
            error.addClass("error");
            return isValidate;

        } else {
            if (!eng.test(loginid) || !spc.test(loginid)) {
                alert("아이디(이메일) 형식을 확인하세요");
                $("#loginid").addClass("error");
                error.addClass("error");
                return isValidate;
            } else {
                $("#loginid").removeClass("error");
                error.removeClass("error");
                isValidate = true;
                return isValidate;
            }

        }

    }

    function pwdact() {
        var num = /[0-9]/;
        var spc = /[~!@#$%^&*()_+{}:"<>?|]/;
        var eng = /[a-zA-z]/;
        var error = $(".logintable tbody tr").eq(0).find("th label span");
        var p_same_error = $(".logintable tbody tr").eq(2).find("td p");


        var pwd = $("#pwd").val();
        var pwd2 = $("#pwd2").val();
        var isValidate = false;

        if (pwd.length > 7 && pwd.length < 17) {
            if (pwd == pwd2) {
                if (num.test(pwd) && spc.test(pwd) && eng.test(pwd)) {
                    error.removeClass("error");
                    $("#pwd").removeClass("error");
                    $("#pwd2").removeClass("error");
                    p_same_error.removeClass("error");
                    isValidate = true;
                    return isValidate;
                } else {
                    error.addClass("error");
                    $("#pwd").addClass("error");
                    $("#pwd2").addClass("error");
                    p_same_error.removeClass("error");
                    alert("비밀번호를 영문 대소문자/숫자/특수문자 중 3가지 이상 조합해 주세요");
                    return isValidate;
                }
            } else {
                error.addClass("error");
                $("#pwd").addClass("error");
                $("#pwd2").addClass("error");
                p_same_error.addClass("error");
                var isValidate = false;
            }


        } else {
            error.addClass("error");
            $("#pwd").addClass("error");
            $("#pwd2").addClass("error");
            return isValidate;
        }


    }
});