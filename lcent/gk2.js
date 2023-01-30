(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-41TTTT-1', 'onTTTri.com');

    ga('require', 'displayfeatures');
    
            ga('set', 'dimension7', "Hindi");

                var dimensionValue = 'Not Plus';
        ga('set', 'dimension8', dimensionValue);
    
            var dimensionValue = 'Onlinetyari';
        ga('set', 'dimension9', dimensionValue);
    
                ga('send', 'pageview');
            ga('set', 'userId', '9TTTTTTTTTTTT719');
    
    ga('require', 'ec');
	
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
	
	
	var base_url = 'htUi.com/';
    var cdn_server = '//s3-ap-Ulinetyari.com/';
    var external_cdn_server = 'https://onlinetyari.com/local-cdn/external-cdn/';
    var article_type = '4';
    var customer_id = '9057719';
    var shareIcon='शेयर ';
    var bookmarktext='बुकमार्क ';
    var bookmarkedtext='बुकमार्केड';
    var correctAnstxt='सही जवाब';
    var wrongAnstxt='आपका जवाब गलत है';
    var commentfb='हिंदी मैं करंट अफेयर्स के लिए कमेंट करे';
    var page = 1;
    $(".cd-main-content > .navbar-fixed-top").remove();
	
	
	
	var lastSyncDate='';
    var startIndex='0';
    var endIndex='2';
    var customer_id='905UU7719';
    var user_lang_id='2';
    var lang_id='2';


window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});
