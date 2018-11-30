/*
로그인 Window 팝업 
lang : "KOR" or "ENG" 
*/
function popupLogin(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/Login";
    return popupWindow(url, 400, 300, "popupLoginWindow");
}


/*
로그아웃 Window 팝업 
lang : "KOR" or "ENG" 
*/
function popupLogout(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/Logout";
    return popupWindow(url, 400, 120, "popupLogoutWindow");
}


/*
비밀번호 변경 Window 팝업 
lang : "KOR" or "ENG" 
*/
function popupChangePassword(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/ChangePassword";
    return popupWindow(url, 400, 360, "popupChangePasswordWindow");
}


/*
비밀번호 찾기 Window 팝업 
lang : "KOR" or "ENG" 
*/
function popupFindPassword(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/FindPassword";
    return popupWindow(url, 400, 250, "popupFindPasswordWindow");
}




/*
이메일 변경 Window 팝업 
lang : "KOR" or "ENG" 
*/
function popupChangeEmail(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/ChangeEmail";
    return popupWindow(url, 400, 340, "popupChangeEmailWindow");
}


/*
부스 Layout 팝업
*/
function popupBoothLayout(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/Exhibit/BoothLayout?Mode=V";
    return popupWindow(url, 900, 800, "popupBoothLayoutWindow");
}


/*
부스 선택용 팝업
*/
function popupBoothSelect(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/Exhibit/BoothLayout?Mode=S&ApplyRank=1";
    return popupWindow(url, 900, 800, "popupBoothLayoutWindow");
}

/*
2순위 부스 선택용 팝업
*/
function popupBoothSelect2(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/Exhibit/BoothLayout?Mode=S&ApplyRank=2";
    return popupWindow(url, 900, 800, "popupBoothLayoutWindow");
}


/*
Table Layout 팝업
*/
function popupTableLayout(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/Exhibit/TableLayout?Mode=V";
    return popupWindow(url, 900, 800, "popupTableLayoutWindow");
}

/*
Table Layout 팝업
*/
function popupParticipantsList(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    lang = lang.toUpperCase();
    var url = "/" + lang + "/Exhibit/TableLayout?Mode=V&ShowList=Y";
    return popupWindow(url, 900, 800, "popupTableLayoutWindow");
}


/*
Table 선택용 팝업 
*/
function popupTableSelect(lang) {
    if (lang == undefined || lang.length == 0)
        lang = "KOR";
    var url = "/" + lang + "/Exhibit/TableLayout?Mode=S";
    return popupWindow(url, 900, 800, "popupTableLayoutWindow");
}

// 엔터키 자동 submit  방지
// <form> tag 내에 onkeydown="javascript:StopSubmit(); 삽입해서 사용
function stopSubmit() {
    var keyCode = window.event.keyCode;
    if (keyCode == 13) {
        window.event.returnValue = false;
    }
}



// 팝업윈도우
function popupWindow(url, width, height) {
    leftVal = (screen.width - width) / 2;
    topVal = (screen.height - height) / 2;
    return window.open(url, '', 'width=' + width + ',height=' + height + ',left=' + leftVal + ',top=' + topVal + ',scrollbars=yes');
}

function popupWindow(url, width, height, target) {
    leftVal = (screen.width - width) / 2;
    topVal = (screen.height - height) / 2;
    return window.open(url, target, 'width=' + width + ',height=' + height + ',left=' + leftVal + ',top=' + topVal + ',scrollbars=yes');
}

// keyCode가 숫자인지 체크
function isNumeric(keyCode) {
    return keyCode >= 48 && keyCode <= 57 // 0~9
}

// email validation 
function isEmail(val) {
    return isEmailFormat(val);
}

function isEmailFormat(val) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(val);
}


/*
체크박스 그룹의 특정 항목 선택처리
*/
function setCheckbox(name, value) {
    $('input[type="checkbox"][name="' + name + '"][value="' + value + '"]').prop('checked', true);
}


/*
단일선택 체크박스 선택처리
*/
function setCheckboxChecked() {    //클릭 이벤트 발생한 요소가 체크 상태인 경우
    if ($(this).prop('checked')) {
        //체크박스 그룹의 요소 전체를 체크 해제후 클릭한 요소 체크 상태지정
        $('input[type="checkbox"][name="' + $(this).prop('name') + '"]').prop('checked', false);
        $(this).prop('checked', true);
    }
}



/*
radio 그룹의 특정 항목 선택처리
*/
function setRadioValue(name, value) {
    $("input[type='radio'][name='" + name + "'][value='" + value + "']").prop('checked', true);
}



function htmlEncode(value) {
    if (value) {
        return $('<div />').text(value).html();
    } else {
        return '';
    }
}
function htmlDecode(value) {
    if (value) {
        return $('<div />').html(value).text();
    } else {
        return '';
    }
}



/*
다음 우편번호 팝업
*/
function popupDaumZipCode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 도로명 조합형 주소 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraRoadAddr !== '') {
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }
            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
            if (fullRoadAddr !== '') {
                fullRoadAddr += extraRoadAddr;
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.

            if ($('#zipCode').length > 0 ) {
                $('#zipCode').val(data.zonecode).change(); //5자리 새우편번호 사용
                $('#addressK').val(fullRoadAddr).change();
                $('#address1K').val(data.address).change(); // 기본주소
                $('#address2K').val('').change(); //동/호수
                $('#address3K').val(extraRoadAddr).change(); // (법정동 + 건물명)
                $('#addressE').val(data.roadAddressEnglish).change();
                if (data.apartment === 'Y') {
                    alert('동/호수를 입력하시기 바랍니다.');
                    $('#addressK2').focus();
                } else {
                    alert('주소선택이 완료되었습니다.');
                    $('#addressK2').val('동/호수(해당없음)');
                }
            } else if ($('#ctl00_ctl00_rootPlaceHolder_subpagePlaceHolder_zipCode').length > 0) {
                $('#ctl00_ctl00_rootPlaceHolder_subpagePlaceHolder_zipCode').val(data.zonecode).change(); //5자리 새우편번호 사용
                $('#ctl00_ctl00_rootPlaceHolder_subpagePlaceHolder_addressK').val(fullRoadAddr).change();
                $('#ctl00_ctl00_rootPlaceHolder_subpagePlaceHolder_address1K').val(data.address).change(); // 기본주소
                $('#ctl00_ctl00_rootPlaceHolder_subpagePlaceHolder_address2K').val('').change(); //동/호수
                $('#ctl00_ctl00_rootPlaceHolder_subpagePlaceHolder_address3K').val(extraRoadAddr).change(); // (법정동 + 건물명)
                $('#ctl00_ctl00_rootPlaceHolder_subpagePlaceHolder_addressE').val(data.roadAddressEnglish).change();
                if (data.apartment === 'Y') {
                    alert('동/호수를 입력하시기 바랍니다.');
                    $('#ctl00$ctl00$rootPlaceHolder$subpagePlaceHolder$addressK2').focus();
                } else {
                    alert('주소선택이 완료되었습니다.');
                    $('#ctl00$ctl00$rootPlaceHolder$subpagePlaceHolder$addressK2').val('동/호수(해당없음)');
                }
            } else {
                alert("주소값 SETTING 오류")
            }


        }
    }).open();
}



/*
Cookie Set
*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/*
Cookie Get
*/
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

/*
로그인되었는지 체크
*/
function checkLoginByCookie() {
    var user = getCookie("Member");
    if (user != "") {
        return true;
    } else {
        return false;
    }
}


// 브라우져 Parameter GET
function getParam(key) {
    // Find the key and everything up to the ampersand delimiter
    var value = RegExp("" + key + "[^&]+").exec(window.location.search);

    // Return the unescaped value minus everything starting from the equals sign or an empty string
    return unescape(!!value ? value.toString().replace(/^[^=]+./, "") : "");
}


/*
한글 입력 체크
*/
function checkHangul(text) {
    var check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    var result = text.match(check);
    if (result) return true; //한글일 경우
    return false; //한글이 아닐경우
}


/* 렌탈리스트 팝업 */
var rentalItemListPopup;
function popupRentalItemList(lang) {
    rentalItemListPopup = popupWindow("/" + lang + "/Exhibit/RentalItemList.aspx", 670, 700, "rentalItemListPopup");
    rentalItemListPopup.focus();
}

/* [관리자] 회원관리 팝업 */
function popupMemberManage(grid) {
    var grid = mainGrid;
    var count = grid.GetSelectedRowCount();
    if (count == 0) {
        alert('선택된 항목이 없습니다.');
    }
    else if (count > 1) {
        alert('1건만 선택하세요.');
    }
    else {
        grid.GetSelectedFieldValues("MemberId;MemberHash", function (selectedValues) {
            var popup = popupWindow("/Admin/Member/Manage?id=" + selectedValues[0][0] + "&key=" + selectedValues[0][1], 1000, 800, "popup");
            popup.focus();
        });
    }
}

/*
     FILE ARCHIVED ON 23:37:38 Apr 23, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:55:53 Nov 30, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 46.509 (3)
  esindex: 0.007
  captures_list: 62.766
  CDXLines.iter: 11.522 (3)
  PetaboxLoader3.datanode: 50.614 (4)
  exclusion.robots: 0.163
  exclusion.robots.policy: 0.152
  RedisCDXSource: 1.605
  PetaboxLoader3.resolve: 118.509
  load_resource: 137.186
*/