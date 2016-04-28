 $("#login").click(function () {
			var data = serializeArrayToJson($("#login_form").serializeArray());
            var options = {
                url: '/login.do',
                type: 'post',
                dataType: 'json',
                data: data,
                success: function (data) {
				if(data.result != null){
					$.cookie('name', data.result.name);
					$.cookie('id', data.result.id);
					location.href="http://localhost:8088/index.vhtml";
				}
			}
            };
            $.ajax(options);
            return false;
        });