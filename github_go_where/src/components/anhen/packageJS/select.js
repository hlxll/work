function initSelectPost(){
    util.proxyPost('/common-base/api/appTask/getThreatInfoList',{type: param}).success(function(res) {
      res = res.data;
    //   className和nameName是select的类名和name名称
      var $select = $('.className select[name="nameName"]');
      if (res && $.isArray(res) && res.length) {
        var html = '<option value></option>';
        res.forEach(function(e) {
          html += '<option value="' + e.value + '">' + e.value + '</option>';
        });
        $select.find('option').remove()
        $select.append(html);
        $select.select2({
          placeholder: '威胁名称',
          static: true,
          allowClear: true,
          $el: $('select[name="type"]')
        });
      }else {
        $select.select2({
          placeholder: '威胁名称'
        });
      }
    });
}
// post请求和get请求，，url地址，，data参数
function proxyPost(url, data) {
    return this.proxy(url, data, 'post');
}
function proxy(url, data, opt) {
    if ($.isPlainObject(url)) {
        opt = url;
        url = null;
    }
    if ($.isPlainObject(data) && url) {
        data.url = url;
    }
    if (!data) {
        data = {
        url: url
        };
    }
    // method
    if (typeof opt === 'string' && !data.method) {
        data = $.extend(
        {
            method: opt
        },
        data
        );
        opt = null;
    }
    if (!url) {
        console.error('proxy no url');
        return;
    }
    return $.ajax(
        $.extend(
        {
            url: __ROOT__ + '/Home/OperateService/proxy',
            data: data,
            type: data.method || 'get'
        },
        opt
        )
    );
}