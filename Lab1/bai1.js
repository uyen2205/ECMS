var users = [
    { id: 1, name: "James Smith", gender: 1 },
    { id: 2, name: "Isla Brown", gender: 2 },
    { id: 3, name: "Amelia Davies", gender: 1 },
    { id: 4, name: "Jacob evans", gender: 2 }
  ];
  
  var target = document.getElementById("target");
  
  // Sử dụng map để tạo mảng thẻ <li> từ mảng users
  var userListItems = users.map(user => {
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.href = '#';  // Thêm href tùy theo nhu cầu
    link.textContent = `ID: ${user.id}, Name: ${user.name}, Gender: ${user.gender === 1 ? 'Male' : 'Female'}`;
    listItem.appendChild(link);
    return listItem;
  });
  
  // Thêm các thẻ <li> vào phần tử có id là 'target'
  userListItems.forEach(item => {
    target.appendChild(item);
  });