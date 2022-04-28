$(document).ready(function () {
    var i =2;
    $("#btn2").click(function () {
        $("#myModal").modal();
    });
    function CheckHoTen() {
        re = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Tên không được để rỗng")
            return false;
        }
        if (!re.test($("#Name").val())) {
            $("#tbName").html("Tên phải viết hoa chữ đầu")
            return false;
        }
        $("#tbName").html("*")
        return true;
    }
    $("#Name").blur(CheckHoTen);
    function CheckSoAo() {
        re = /^[0-9]*/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("Số áo không được để rỗng")
            return false;
        }
        if (!re.test($("#Ao").val())||$("#Ao").val() > 20 || $("#Ao").val()<1) {
            $("#tbAo").html("Số áo phải từ 1 đến 20")
            return false;
        }
        $("#tbAo").html("*")
        return true;
    }
    $("#Ao").blur(CheckSoAo);
    function CheckClb() {
        re = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+)\s{1}[1-9])$/
        if ($("#txtCLB").val() == "") {
            $("#tbCLB").html("CLB không được để rỗng")
            return false;
        }
        if (!re.test($("#txtCLB").val())) {
            $("#tbCLB").html("Dùng chữ hoa đầu hoặc số (Ví dụ: Ha Noi 1)")
            return false;
        }
        $("#tbCLB").html("*")
        return true;
    }
    $("#txtCLB").blur(CheckClb);
    function CheckNgayTT() {
        if ($("#NTT").val() == "nn/mm/yyyy") {
            $("#tbNTT").html("Ngày không được để rỗng")
            return false;
        }
        today = new Date();
        ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + today.getMonth());
        if (today > ntt) {
            $("#tbNTT").html("Phải sau ngày hiện tại 1 tháng");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(CheckNgayTT);

    function CheckSDT() {
        var re = /^0\d{2}-\d{3}-\d{4}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("SDT không được để rỗng");
            return false;
        }
        if (!re.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 0xx-xxx-xxxx trong đó X là số, không để khoảng trắng ở ký tự đầu");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(CheckSDT);

    function CheckADD() {
        if ($("#ADD").val() == "") {
            $("#tbADD").html("Ảnh đại diện không để trống");
            return false;
        }
        $("#tbADD").html("*");
        return true;
    }
    $("#ADD").blur(CheckADD);
    $("#Save").click(function () {
        if (CheckHoTen() == true && CheckClb() == true && CheckNgayTT() == true && CheckSDT() == true && CheckSoAo() == true && CheckADD() == true) {
            alert('Đăng ký thành công');
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#txtCLB").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        } else {
            alert('Vui lòng nhập chính xác và đầy đủ thông tin');
        }
    })

});
