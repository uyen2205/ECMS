let classRoom = [
    "nguyễn tiến duẩn",
    "Hoàng Xuân Hiếu",
    "Hồ Sỹ Hưng",
    "Nguyễn Đức Thuận",
    "đoàn Minh Tùng",
    "Hồ Sỹ Hưng",
    "Lê Trung Hiếu",
    "đoàn vua dep trai vua hoc gioi Hữu Quý"
];
// tách
let separatedNames = classRoom.map(fullName => {
    let names = fullName.split(" ");
    return {
        ho: names.slice(-1).join(" "),
        ten: names.slice(0, -1).join(" ")
    };
});
console.log(" Tách tên và họ riêng", separatedNames);
// thêm
let newStudent = "Nguyễn Văn A";
let positionToAdd = 2;
classRoom.splice(positionToAdd, 0, newStudent);
console.log(" Thêm sinh viên vào vị trí bất kỳ", classRoom);
// xóa
let studentToRemove = "Hồ Sỹ Hưng";
classRoom = classRoom.filter(student => student !== studentToRemove);
console.log(" Xoá sinh viên khỏi mảng", classRoom);

let searchName = "Hoang Xuan Hieu";
let foundStudent = classRoom.find(student => {
    // Chuyển đổi tên sinh viên và tên cần tìm thành chữ thường và loại bỏ dấu
    return student.toLowerCase().replace(/[\u0300-\u036f]/g, "") === searchName.toLowerCase().replace(/[\u0300-\u036f]/g, "");
});

console.log("Câu 4: Tìm kiếm theo tên không chứa dấu", foundStudent);