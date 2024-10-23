//     Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv)
//     Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
//     Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
//     Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
//     Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
//     Có chức năng bật và tắt điện thoại.
//     Có chức năng xạc pin điện thoại.
//     Có chức năng soạn tin nhắn.
//     Có chức năng nhận tin nhắn từ một chiếc mobile khác.
//     Có chức năng gửi tin nhắn tới một chiếc mobile khác.
//     Có chức năng xem tin trong hộp thư đến.
//     Có chức năng xem tin đã gửi.
//     Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
//     Các chức năng không thể hoạt động nếu điện thoại chưa bật.

class mobilePhone {
    battery = 100
    draftMessage = ""
    inbox = ""
    sent = ""
    isOn = false

    batteryLevel = function () {
        if (this.battery > 0 && this.isOn) {
            this.battery--
            return true
        }
        return false
    }

    phoneOn() {
        this.isOn = true;
    }
    phoneOff() {
        this.isOn = false;
    }
    composeMessage(message) {
        if (this.isOn) {
            this.draftMessage = message;
        }
    }
    reciveMessage(message) {
        if (this.isOn) {
            this.inbox.push(message)
        }
    }
    sendMessage(message) {
        if (this.isOn) {
            this.sent.push(message)
        }
    }
    viewInbox(message) {
        if (this.isOn) {
            this.inbox.forEach((message) => {})
        }
    }

    let nokia = new mobilePhone()
    let iphone = new mobilePhone()

    // Bật điện thoại Nokia và iPhone
    nokia.phoneOn();
    iphone.phoneOn();

    // Nokia soạn tin nhắn và gửi cho iPhone
    nokia.composeMessage("Nokia Connecting People");
    nokia.sendMessage(iphone);

    // iPhone kiểm tra hộp thư đến và hiển thị tin nhắn
    iphone.viewInbox();

    // Xem mức pin còn lại sau các thao tác
    document.write("Pin của Nokia: " + nokia.battery + "<br>");
    document.write("Pin của iPhone: " + iphone.battery + "<br>");

    // Tắt điện thoại Nokia và iPhone
    nokia.phoneOff();
    iphone.phoneOff();
}

