var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
 googletag.cmd.push(function() {
  googletag.pubads().setTargeting('is_plus_user', 'false');

googletag.pubads().setTargeting('user_lang', 'hindi');

              googletag.pubads().setTargeting('guest', 'false');
     });
	 
	 googletag.cmd.push(function() {
        googletag.defineSlot('/182703672/OTMobi_Footer_300x100_ATF', [300, 100], 'div-gpt-ad-1555580098067-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs(true);
        googletag.enableServices();
    });
	
	 window.dataLayer = window.dataLayer || [];

        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-968597985');
		
		var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    (function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
    '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
    })();
	
	 (function(i,s,o,g,r,a,m,n){
        i['moengage_object']=r;t={}; q = function(f){return function(){(i['moengage_q']=i['moengage_q']||[]).push({f:f,a:arguments});};};
        f = ['track_event','add_user_attribute','add_first_name','add_last_name','add_email','add_mobile',
            'add_user_name','add_gender','add_birthday','destroy_session','add_unique_user_id','moe_events','call_web_push','track','location_type_attribute'];
        for(k in f){t[f[k]]=q(f[k]);}
            a=s.createElement(o);m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
        i['moe']=i['moe'] || function(){n=arguments[0];return t;}; a.onload=function(){if(n){i[r] = moe(n);}};
    })(window,document,'script','https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js','Moengage');
        Moengage = moe({
        app_id:"1OODAHJZT8MBBMCSOVLD0TUH",
        debug_logs: 0
    });
    
    function set_moe_user(userArr){
        if(parseInt(userArr['customer_id'])>0) {
            Moengage.add_unique_user_id(parseInt(userArr['customer_id']));
            Moengage.add_email(userArr['customer_email']);
            Moengage.add_first_name(userArr['customer_fname']);
            Moengage.add_last_name(userArr['customer_lname']);
            Moengage.add_mobile(parseInt(userArr['customer_mobile']));
                            Moengage.add_user_attribute('web_platform','mobisite');
                Moengage.add_user_attribute('mobisite_visitor','true');
                    }
    }
    function set_moe_user_additional_attr(userAttrArr){
        //userAttrArr.forEach()

                    Moengage.add_unique_user_id(parseInt('9057719'));
            Moengage.add_email('deepak17517@gmail.com');
            for (var k in userAttrArr) {
                if (userAttrArr.hasOwnProperty(k)) {
                    Moengage.add_user_attribute(k,userAttrArr[k]);
                }
            }
            }
    var trackCleverTapEvents = function(event_action,cleverTapEventJsonArr) {
        Moengage.track_event(event_action, cleverTapEventJsonArr);
    }
	
	
	
	
    var dateObj = new Date();
    var ca_page_start_time = dateObj.getTime();

    function saveUserAttemptData(customer_id,qid,user_lang_id,option){
        var questionTimeAttempt = getQuestionTimeDifference();
        if(user_lang_id == 1){
            var ca_product_id = '252';
            var ca_question_bank_id = '1';
        }else if(user_lang_id == 2){
            var ca_product_id = '253';
            var ca_question_bank_id = '1';
        }else{
            var ca_product_id = '1148';
            var ca_question_bank_id = '104';
        }
        $.ajax({
            type :"POST",
            url:'https://onlinetyari.com/index.php?route=question-collection/current_affairs/saveUserCurrentAffairQuestions',
            data :{
                'customer_id' : customer_id,
                'product_id' : ca_product_id,
                'lang_id' : user_lang_id,
                'question_id' : qid,
                'option' : option,
                'ques_bank_id' : ca_question_bank_id,
                'time': questionTimeAttempt
            },
            success:function(data)
            {
                console.log(data);
            }
        });
    }
    function getQuestionTimeDifference() {
        var questionCurrent_obj      = new Date();
        var question_current_time    = questionCurrent_obj.getTime();        
        var question_time_difference = parseInt(question_current_time,10)-parseInt(ca_page_start_time,10);
        ca_page_start_time = questionCurrent_obj.getTime();
        return question_time_difference;
    }


    function checkAnswer(id,qid){

        var answer=$('#correctOption_'+qid).val();

        var chosenOption=$('#'+id).find('.ot-ques-list-input').val();

        if(answer == chosenOption){
            trackOutboundLink(true,'Current Affairs List Page','Question Attempt','Right');
            $('#wrongAnswer_'+qid).hide();
            $('#'+id+' ul li').removeClass('ot-correct-li');
            $('#'+id+' ul li').removeClass('ot-wrong-li');
            $('#'+id).addClass('ot-correct-li');
        }else{
            trackOutboundLink(true,'Current Affairs List Page','Question Attempt','Wrong');
            $('#wrongAnswer_'+qid).show();
            $('#'+id+' ul li').removeClass('ot-correct-li');
            $('#'+id+' ul li').removeClass('ot-wrong-li');
            $('#'+id).addClass('ot-wrong-li');

        }


        $(this).addClass('ot-correct-li');
        if(customer_id > 0){
            saveUserAttemptData(customer_id,qid,user_lang_id,chosenOption);
            if(answer==1){
                $('#optionsCard'+qid+' #options_1_'+qid).addClass('ot-correct-li');
                $('#correctAnswer_'+qid).html(correctAnstxt+' :(A)');
            }else if(answer==2){
                $('#optionsCard'+qid+' #options_2_'+qid).addClass('ot-correct-li');
                $('#correctAnswer_'+qid).html(correctAnstxt+' :(B)');
            }else if(answer==3){
                $('#optionsCard'+qid+' #options_3_'+qid).addClass('ot-correct-li');
                $('#correctAnswer_'+qid).html(correctAnstxt+' :(C)');
            }else if(answer==4){
                $('#optionsCard'+qid+' #options_4_'+qid).addClass('ot-correct-li');
                $('#correctAnswer_'+qid).html(correctAnstxt+' :(D)');
            }else if(answer==5){
                $('#optionsCard'+qid+' #options_5_'+qid).addClass('ot-correct-li');
                $('#correctAnswer_'+qid).html(correctAnstxt+' :(E)');
            }
        }
        $('#optionsCard'+qid+' li ').css('pointer-events','none');
        $('#correctOptions_'+qid).css('display','inline-block');
    }


    function getMoreCurrentAffairs() {
        trackOutboundLink(true,'Content List Page','Load More','Current Affairs');
        var parameters='';
        if(typeof tagslist !=='undefined'){

            if(tagslist.length > 0){
                parameters +='&tags='+tagslist;
                //var url='https://onlinetyari.com/hindi/index.php?route=question-collection/current_affairs/getCurrentAffairs&date='+lastSyncDate;
            }

        }
        if(typeof monthlist !=='undefined'){
            parameters +='&month='+monthlist;
            startIndex =parseInt(endIndex);
            endIndex=parseInt(endIndex)+6;
            if(typeof tagslist !=='undefined'){

                if(tagslist.length > 0){
                    startIndex =parseInt(endIndex);
                    endIndex=parseInt(endIndex)+10;

                    //var url='https://onlinetyari.com/hindi/index.php?route=question-collection/current_affairs/getCurrentAffairs&date='+lastSyncDate;
                }

            }
            parameters +='&startIndex='+startIndex+'&endIndex='+endIndex;
        }else{
            page = page + 1;
            parameters+='&page='+page;
        }

        var url='https://onlinetyari.com/hindi/index.php?route=question-collection/current_affairs/getCurrentAffairs'+parameters;

        console.log(url);
        $.ajax({
            url: url,
            type: 'get',
            success: function (data, textStatus, jqXHR) {

                var html=createMobileCurrentAffairsList(data);
                $("#currentAffairsListDiv").append(html);
                getBookmarkedQuestions();
                $(function() {
                    //stickyHeaders.load($('.followMeBar'));
                });
            }, error: function (jqXHR, textStatus, errorThrown) {
                console.log(data)
            }
        });
    }

    function createMobileCurrentAffairsList(data){

        var html='';
        var response = JSON.parse(data);
        if ((Object.keys(response.currentAffairsList)).length > 0) {
            $.each(response.currentAffairsList, function (key, value) {

                var newDateFormat=getFormattedDate(key);



                html +=' <div class="col-12 col-sm-12 pad_lr_10 followMeBar">';
                html +='<h4 class="ot-current-heading">'+newDateFormat+'</h4>';


                html +='</div>';
                html +='<div class="articles-item">';


                lastSyncDate=key;
                $.each(value, function (ckey, q_data) {
                    html += '<div class="articles-item-inner col-12 col-sm-12 ot-current-border-bottom pad_10" id="' + q_data.q_id + '">';
                    html += '<div class="media">';

                    html += '<div class="media-body">';
                    html += ' <a rel="nofollow" class="media-heading ot-current-content" id="title' + q_data.q_id + '" title="'+q_data.q_title+'" onclick="return trackOutboundLink(true,\'Current Affair Page\',\'question widget\',\' question click\');" href="'+q_data.q_url+'">';
                    html += '<h4 class="media-heading ot-current-content article-url" href-url="'+q_data.q_url+'">';

                    html +=q_data.q_text;

                    html +='</h4>';
                    html +='</a>';



                    html +='<div id="optionsCard'+q_data.q_id+'" class="col-12 no_pad">';
                    html +='<ul class="list-unstyled ot-ques-list-ul" style="padding-left: 0px;">';
                    html +='<li id="options_1_'+q_data.q_id+'" onclick="checkAnswer(this.id,'+q_data.q_id+')">';
                    html +='<div id="ot-ques-list-circle">A</div>';
                    html +='<input class="ot-ques-list-input" type="radio" value="1" name="radio" id="radio1" />';
                    html +='<label class="ot-ques-list-label" for="radio1">'+q_data.q_option_1+'</label>';
                    html +='</li>';
                    html +='<li id="options_2_'+q_data.q_id+'" class="ot-ques-list-li" onclick="checkAnswer(this.id,'+q_data.q_id+')">';
                    html +='<div id="ot-ques-list-circle">B</div>';
                    html +='<input class="ot-ques-list-input" type="radio" value="2" name="radio" id="radio2" />';
                    html +='<label class="ot-ques-list-label" for="radio2">'+q_data.q_option_2+'</label>';
                    html +='</li>';
                    html +='<li id="options_3_'+q_data.q_id+'" class="ot-ques-list-li" onclick="checkAnswer(this.id,'+q_data.q_id+')">';
                    html +='<div id="ot-ques-list-circle">C</div>';
                    html +='<input class="ot-ques-list-input" type="radio" value="3" name="radio"  id="radio3"/>';
                    html +='<label class="ot-ques-list-label" for="radio3">'+q_data.q_option_3+'</label>';
                    html +='</li>';
                    html +='<li id="options_4_'+q_data.q_id+'" class="ot-ques-list-li" onclick="checkAnswer(this.id,'+q_data.q_id+')">';
                    html +='<div id="ot-ques-list-circle">D</div>';
                    html +='<input class="ot-ques-list-input" type="radio" value="4" name="radio"  id="radio4"/>';
                    html +='<label class="ot-ques-list-label" for="radio4">'+q_data.q_option_4+'</label>';
                    html +='</li>';
                    if(q_data.q_option_5 != ''){
                        html +='<li id="options_5_'+q_data.q_id+'" class="ot-ques-list-li" onclick="checkAnswer(this.id,'+q_data.q_id+')">';
                        html +='<div id="ot-ques-list-circle">E</div>';
                        html +='<input class="ot-ques-list-input" type="radio" value="5" name="radio" id="radio5" />';
                        html +='<label class="ot-ques-list-label" for="radio5">'+q_data.q_option_5+'</label>';
                        html +='</li>';
                    }
                    html +='</ul>';
                    html +='</div>';
                    if(customer_id > 0 ) {
                        html +='<div id="correctOptions_'+q_data.q_id+'" class="col-12 ot-content-correct-answer pad_15">';
                        html +='<input type="hidden" id="correctOption_'+q_data.q_id+'" value="'+q_data['q_correct_option']+'"/>';
                        html +='<p id="correctAnswer_'+q_data.q_id+'" class="p1-green"></p>';
                        html +='<p id="wrongAnswer_'+q_data.q_id+'" class="ot-content-wrong-answerp">'+wrongAnstxt+'</p>';
                        html +='<p class="p2-black">';
                        html +='<h6>Explanation:</h6>';
                        html +=q_data.q_exp_ans;

                        html +='</p>';
                        html +='</div>';
                    }else{
                        html +='<div id="correctOptions_'+q_data.q_id+'" class="col-md-12 ot-content-correct-answer" style="height: 100%; position: relative;">';
                        html +='<input type="hidden" id="correctOption_'+q_data.q_id+'" value="'+q_data['q_correct_option']+'"/>';
                        html +='<p style="color:#f2f2f2;">'+q_data.q_exp_ans+'</p>';
                        html +='<div class="ca-white-box text-center">';
                        html +='<p stye="font-size:16px;">';
                        html +='In order to see explanation, you need to Register.';
                        html +='</p>';
                        html +='<a class="ca-register-now" onclick=show_login_popup();trackOutboundLink(true,Current Affairs List Page,Question Attempt,Right);>Register Now</a>';
                        html +='</div>';
                        html +='</div>';
                    }   
                    html +='<div  class="col-12 no_pad mar-10">';
                    html +='<ul class="list-inline ot-current-ul mar-10">';

                    html +='<li class="col-black" onclick="showShareArticlePopUp(\'title' + q_data.q_id + '\')">';
                    html +='<span>';
                    html +='<img src="https://onlinetyari.com/local-cdn/external-cdn/images/themes/v1/content/share.png">';
                    html +='</span> ' +shareIcon;
                    html +='</li>';
                    html +='<li class="col-black" id="bk'+q_data.q_id+'" onclick="bookmarkQuestion('+q_data.q_id+')">';
                    html +='<span>';
                    html +='<img class="bookmark'+q_data.q_id+'" src="https://onlinetyari.com/local-cdn/external-cdn/images/themes/v1/bookmark.png">';
                    html +='</span>';
                    html +='<span class="bookmark_text'+q_data.q_id+'"> '+bookmarktext+'</span>';
                    html +='</li>';
                    html +='</ul>';
                    html +='</div>';
                    html +='</div>';
                    html +='</div>';
                    html +='</div>';
                });
                html +='</div>';

            });
        }else{
            var newDate = new Date(lastSyncDate);
            var lastDate = (newDate.setDate(newDate.getDate() - 1));
            var d = new Date(lastDate);
            lastSyncDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' +d.getDate();
            getMoreCurrentAffairs();
        }

        return html;
    }

    function getFormattedDate(date){
        var dateArray = String(date).split("-");
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var myMonth = dateArray[1];
        var myDay = dateArray[2];
        var myYear = dateArray[0];
        return myDay + " " + months[myMonth - 1] + " " + myYear;
    }

    var months=[];
    var topics=[];
    function filterByMonth(){
        months=[];
        //var monthDoc=document.getElementById('monthsFilters');
        var monthBoxes=document.getElementsByClassName('month_box');

        for(var i=0;i<monthBoxes.length;i++){
            var monthName=monthBoxes[i].value;
            if(monthBoxes[i].checked){
                if($.inArray(monthName, months) === -1) months.push(monthName);
            }
        }
        console.log(months);
        trackOutboundLink(true,'Content List Page','Apply Content Filters','करेंट अफेयर्स | Month | '+months.join(",") +' ');
        //if(months.length > 0){
        //insertParam('month',months.join(","));
        //}


    }
    
    function filterByTopic(){
        topics=[];
        //var monthDoc=document.getElementById('topicsFilters');
        var topicBoxes=document.getElementsByClassName('topic_box');

        for(var i=0;i<topicBoxes.length;i++){
            var topicId=topicBoxes[i].value;
            if(topicBoxes[i].checked){
                if($.inArray(topicId, topics) === -1) topics.push(topicId);
            }
        }
        console.log(topics);

        //if(topics.length > 0) {
        insertParam('tags', topics.join(","));
        //}
    }

    /*function resetTags(id){
        document.getElementById('checkiz'+id).checked = false;
        filterByTopic();
    }
    function resetMonths(id){
        document.getElementById('checkiz'+id).checked = false;
        filterByMonth();
    }*/

    function insertParam(key, value)
    {
        key = encodeURI(key); value = encodeURI(value);

        var kvp = document.location.search.substr(1).split('&');
        var i=kvp.length; var x;
        while(i--){

            x = kvp[i].split('=');
            console.log(x);
            if (x[0]==key){
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }


        }

        if(i<0) {
            kvp[kvp.length] = [key,value].join('=');
        }
        var kvp = kvp.filter(function(e) { return e !== 'tags=' });
        var kvp = kvp.filter(function(e) { return e !== 'month=' });
        //this will reload the page, it's likely better to store this until finished

        document.location.search = kvp.join('&');


    }

    var bookmarkJson=[];
    bookmarkQid='';
    function bookmarkQuestion(qid){

        bookmarkQid=qid;
        if(customer_id > 0){

            $('#bk'+qid+' img').attr('src','https://onlinetyari.com/local-cdn/external-cdn/images/themes/v1/content/bookmarkfill.png');
            $('#bk'+qid).attr('onclick','removeBookmarked('+qid+')');
            $('.bookmark_text'+qid).html(' '+bookmarkedtext);

            var encodedCId=Base64.encode("'"+customer_id+"'");
            console.log(encodedCId);
            if(getCookie('ot_bk_qestions_'+encodedCId)){
                console.log('found');
                bookmarkJson=getCookie('ot_bk_qestions_'+encodedCId);
                bookmarkJson=JSON.parse(bookmarkJson);
                console.log(bookmarkJson);
                bookmarkJson=setBookmarkedQuestion(qid);
                setLongBrowserCookies('ot_bk_qestions_'+encodedCId, JSON.stringify(bookmarkJson));

            }else{
                console.log('Not found');
                var arr={ } ;
                arr[lang_id]=qid;

                setLongBrowserCookies('ot_bk_qestions_'+encodedCId, JSON.stringify(arr));
            }


        }else{
            show_login_popup();
        }
    }


    function removeBookmarked(qid){
        $('#bk'+qid+' img').attr('src','https://onlinetyari.com/local-cdn/external-cdn/images/themes/v1/content/bookmark.png');
        $('#bk'+qid).attr('onclick','bookmarkQuestion('+qid+')');
        $('.bookmark_text'+qid).html(' '+bookmarktext);

        var encodedCId=Base64.encode("'"+customer_id+"'");
        console.log(encodedCId);
        if(getCookie('ot_bk_qestions_'+encodedCId)){

            bookmarkJson=getCookie('ot_bk_qestions_'+encodedCId);
            bookmarkJson=JSON.parse(bookmarkJson);
            console.log(bookmarkJson);
            bookmarkJson=unsetBookmarkedQuestion(qid);
            setLongBrowserCookies('ot_bk_qestions_'+encodedCId, JSON.stringify(bookmarkJson));

        }

    }
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    function setLongBrowserCookies(cookies_name, cookies_value) {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000 * 3600000;
        now.setTime(expireTime);
        document.cookie = cookies_name + '=' + cookies_value + ';expires=' + now.toGMTString();
    }
    function getBookmarkedQuestions(){
        if(customer_id > 0){
            var encodedCId=Base64.encode("'"+customer_id+"'");
            if(getCookie('ot_bk_qestions_'+encodedCId)){
                bookmarkJson=getCookie('ot_bk_qestions_'+encodedCId);
                bookmarkJson=JSON.parse(bookmarkJson);
                var string=bookmarkJson[lang_id].toString();
                if (string.indexOf(',') > -1) {
                    var arr = bookmarkJson[lang_id].split(',');
                }else{
                    if(bookmarkJson[lang_id] !=""){
                        var arr=[bookmarkJson[lang_id]];
                    }else{
                        var arr=[];
                    }

                }
                for(var i=0;i<arr.length;i++){
                    if('#bk'+arr[i]){
                        $('#bk'+arr[i]+' img').attr('src','https://onlinetyari.com/local-cdn/external-cdn/images/themes/v1/content/bookmarkfill.png');
                        $('#bk'+arr[i]).attr('onclick','removeBookmarked('+arr[i]+')');
                        $('.bookmark_text'+arr[i]).html(' '+bookmarkedtext);
                    }
                }

            }
        }

    }

    function setBookmarkedQuestion(qid){
        var isfound=false;
        var string=bookmarkJson[lang_id].toString();
        if (string.indexOf(',') > -1) {
            var arr = bookmarkJson[lang_id].split(',');
        }else{
            if(bookmarkJson[lang_id] !=""){
                var arr=[bookmarkJson[lang_id]];
            }else{
                var arr=[];
            }

        }

        console.log(arr);
        for(var i=0;i<arr.length;i++){
            if(arr[i]==qid){
                isfound=true;
                break;
            }
        }
        if(isfound==false){
            arr.push(qid);
        }

        bookmarkJson[lang_id]=arr.join();
        return bookmarkJson;
    }

    function unsetBookmarkedQuestion(qid){
        var isfound=false;
        var string=bookmarkJson[lang_id].toString();
        if (string.indexOf(',') > -1) {
            var arr = bookmarkJson[lang_id].split(',');
        }else{
            var arr=[bookmarkJson[lang_id]];
        }

        console.log(arr);
        for(var i=0;i<arr.length;i++){
            if(arr[i]==qid){
                isfound=true;
                break;
            }
        }
        if(isfound==true){

            arr=arr.filter(function(e) { return e !== qid.toString() });

        }

        bookmarkJson[lang_id]=arr.join();
        return bookmarkJson;
    }





  function fixDiv() {
        var $div = $("#navwrap");
        if ($(window).scrollTop() > $div.data("top")) {
            $('#navwrap').css({'position': 'fixed', 'top': '0', 'width': '100%', 'z-index': '1050'});
        }
        else {
            $('#navwrap').css({'position': 'static', 'top': 'auto', 'width': '100%'});
        }
    }

    $("#navwrap").data("top", $("#navwrap").offset().top); // set original position on load
    $(window).scroll(fixDiv);
	
	
	
	
	var list_value_global = getGaCookie('ga_list_value');
    if(list_value_global == null || typeof(list_value_global) == 'undefined' || list_value_global == ''){
        var query = window.location.search.substring(1).split("&");
        var isUtmSet =  false;
        var utmSourceStr = 'not set';
        var utmMediumStr = 'not set';
        if(query.length > 0 ){
            query.forEach(function(value, key) {
                var utmSource = value.split('utm_source=');
                var utmMedium = value.split('utm_medium=');
                if(utmSource[1] != '' && typeof(utmSource[1]) != 'undefined'){
                    utmSourceStr = utmSource[1];
                }
                if(utmMedium[1] != '' && typeof(utmMedium[1]) != 'undefined'){
                    utmMediumStr = utmMedium[1];
                }
            });
        }
        if(utmMediumStr == 'not set' && utmSourceStr == 'not set'){

            list_value_global = 'direct/none';
        }else{
            list_value_global = utmSourceStr + '/' + utmMediumStr;
        }

            }
    setGaCookie('ga_list_value',list_value_global,24);
    var user_acquired_source = getGaCookie('user_acquired_source');
    if(user_acquired_source  == null || typeof(user_acquired_source) == 'undefined' || user_acquired_source  == ''){
        var queryAcquiredSource = window.location.search.substring(1).split("&");
        var isUtmSetAcquiredSource =  false;
        var utmSourceStrAcquiredSource = '';
        var utmMediumStrAcquiredSource = 'none';
        var utmCampaignStrAcquiredSource = 'organic';

        if(queryAcquiredSource.length > 0 ){
            queryAcquiredSource.forEach(function(value, key) {
                var utmSourceAcquiredSource = value.split('utm_source=');
                var utmMediumAcquiredSource = value.split('utm_medium=');
                var utmCampaignAcquiredSource = value.split('utm_campaign=');
                if(utmSourceAcquiredSource[1] != '' && typeof(utmSourceAcquiredSource[1]) != 'undefined'){
                    utmSourceStrAcquiredSource  = utmSourceAcquiredSource[1];
                }
                if(utmMediumAcquiredSource[1] != '' && typeof(utmMediumAcquiredSource[1]) != 'undefined'){
                    utmMediumStrAcquiredSource = utmMediumAcquiredSource[1];
                }
                if(utmCampaignAcquiredSource[1] != '' && typeof(utmCampaignAcquiredSource[1]) != 'undefined'){
                    utmCampaignStrAcquiredSource = utmCampaignAcquiredSource[1];
                }
            });
        }
        if(utmSourceStrAcquiredSource == ''){
        var queryAcquiredSource = window.location.search.substring(1).split("?");
            if(queryAcquiredSource.length > 0 ){
                queryAcquiredSource.forEach(function(value, key) {
                    var utmSourceAcquiredSource = value.split('gclid=');
                    if(utmSourceAcquiredSource[1] != '' && typeof(utmSourceAcquiredSource[1]) != 'undefined'){
                        utmSourceStrAcquiredSource  = 'Google AdWords';
                        utmMediumStrAcquiredSource  = 'cpc';
                        utmCampaignStrAcquiredSource  = 'none';
                    }
                });
                if(utmSourceStrAcquiredSource == ''){
                    var documentReffer = document.referrer;                    
                    if(documentReffer !=''){
                        if(documentReffer.search('google')){
                            utmSourceStrAcquiredSource  = 'google-search';
                        }else if(documentReffer.search('yahoo')){
                            utmSourceStrAcquiredSource  = 'yahoo-search';                            
                        }else if(documentReffer.search('bing')){
                            utmSourceStrAcquiredSource  = 'bing-search';
                        }
                    }
                    utmMediumStrAcquiredSource  = 'organic';
                    utmCampaignStrAcquiredSource = 'none';
                }
                if(utmSourceStrAcquiredSource == ''){
                    utmSourceStrAcquiredSource  = 'direct';
                }
            }
        }
        user_acquired_source = utmSourceStrAcquiredSource + '|' + utmMediumStrAcquiredSource + '|' + utmCampaignStrAcquiredSource;
        
    }
    setGaCookie('user_acquired_source',user_acquired_source,'1');


    var enable_send_ga_events="";
    var trackOutboundLink = function(isExternal,event_category,event_action,event_label) {
                ga('send', 'event', event_category, event_action, event_label);
        return isExternal;
    }
    var trackOutboundLinkwithvalue = function(isExternal,event_category,event_action,event_label,event_value) {

                ga('send', 'event', event_category, event_action, event_label, event_value);
        return isExternal;
    }

    function ecommerce_tracking(product_id,product_name,publisher,category,price,quantity) {
        ga('ec:addProduct', {
            'id':product_id,
            'name': product_name,
            'brand': publisher,
            'category': category,
            'price': price,
            'quantity': quantity
        });
        ga('ec:setAction','checkout', {
            'step': 1,
            'list': list_value_global
        });
        ga('send', 'event', 'Buy Now', 'Click on buy now button',product_name,price);
    }
    function ecommerce_tracking_step_1(event_category,event_action,event_label,list_value,product_id,product_name,publisher,category,price,quantity) {

        ga('ec:addProduct', {
            'id':product_id,
            'name': product_name,
            'brand': publisher,
            'category': category,
            'price': price,
            'quantity': quantity
        });
        ga('ec:setAction','checkout', {
            'step': 1,
            'list': list_value_global
        });
        setGaCookie('ga_list_value',list_value,24);
        trackOutboundLinkwithvalue(true,event_category,event_action,event_label,parseInt(price,10));
    }

    function ecommerce_tracking_step_2(product_id,product_name,publisher,category,price,quantity,payment_option,coupon_code = null) {

        ga('ec:addProduct', {
            'id':product_id,
            'name': product_name,
            'brand': publisher,
            'category': category,
            'price': price,
            'quantity': quantity
        });
        if(coupon_code != null){
            ga('ec:setAction','checkout', {
                'step': 2,
                'option': payment_option,
                'list': list_value_global,
                'coupon': coupon_code
            });
            ga('ec:addPromo', {
                'id':coupon_code,
                'name':'Promo Code'
            });
            ga('ec:setAction', 'promo_click');
            ga('send', 'event', 'Product Purchase', 'Apply Coupon', coupon_code);

        }else{
            ga('ec:setAction','checkout', {
                'step': 2,
                'option': payment_option,
                'list': list_value_global
            });
        }
        ga('send', 'event', 'Checkout Option', 'Click on payment button');
    }
    function ecommerce_tracking_purchase(product_id,product_name,publisher,category,price,quantity,ecommerce_product_revenue,txn_id,coupon_code) {
        ga('ec:addProduct', {
            'id':product_id,
            'name': product_name,
            'brand': publisher,
            'category': category,
            'price': price,
            'quantity': quantity
        });
        if(coupon_code != null){
            ga('ec:setAction', 'purchase', {
                'id': txn_id,
                'affiliation': 'onlinetyari',
                'revenue': ecommerce_product_revenue,
                'list': list_value_global,
                'coupon': coupon_code
            });
        }else{
            ga('ec:setAction', 'purchase', {
                'id': txn_id,
                'affiliation': 'onlinetyari',
                'revenue': ecommerce_product_revenue,
                'list': list_value_global
            });
        }
        ga('send', 'event', 'Purchase', 'purchase action');
    }
    function ecommerce_impression(list,id,name,brand,category,position,price)
    {
        if(parseInt(price,10)==0){
            return;
        }
        ga('ec:addImpression', {
            'list': list,
            'id': id,
            'name': name,
            'brand': brand,
            'category': category,
            'position': position,
            'price': price
        });
    }
    function ecommerce_action(isExternal,event_category,event_action,event_label,list_value,id,name,brand,category,position,price)
    {
        setGaCookie('ga_list_value',list_value,24);
        trackOutboundLinkwithvalue(true,event_category,event_action,event_label,parseInt(price,10));
        if(parseInt(price,10)==0){
            return;
        }
        ga('ec:addProduct', {
            'id': id,
            'name': name,
            'brand': brand,
            'category': category,
            'position': position,
            'price': price
        });
        ga('ec:setAction', 'click', {list: list_value_global});
        return true;
    }
	
	
	
	
	
	
	
	
	
    function getGaCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
        }
        return "";
    }

    function setGaCookie(cookies_name, cookies_value, hours) {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + (hours * 3600000 ) ;
        now.setTime(expireTime);
        document.cookie = cookies_name + '=' + cookies_value + ';expires=' + now.toGMTString()+';path=/';
    }

	
	
	
	
	
	 