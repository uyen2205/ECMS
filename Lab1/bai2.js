var users = [];

        function addUser() {
            var userId = document.getElementById('userId').value;
            var userName = document.getElementById('userName').value;
            var userGender = document.getElementById('userGender').value;

            var user = {
                id: userId,
                name: userName,
                gender: userGender
            };

            users.push(user);

            displayUserList();
        }

        function displayUserList() {
            var userList = document.getElementById('userList');
            userList.innerHTML = '';

            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                var listItem = document.createElement('li');
                listItem.textContent = 'ID: ' + user.id + ', Name: ' + user.name + ', Gender: ' + user.gender;
                userList.appendChild(listItem);
            }
        }