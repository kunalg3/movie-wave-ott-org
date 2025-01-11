import { useState } from "react";
function test() {
  const data = [
    { id: 1, title: "name", content: "hello" },
    { id: 2, title: "name", content: "hello" },
    { id: 3, title: "name", content: "hello" },
  ];

  const [visible, setVisible] = useState(null);
  const handleToggle = (id) => {
    setVisible(visible === id ? null : id);
  };
  return (
    <div className="App">
      {data.map((user) => (
        <div key={user.id}>
          <h3 onClick={() => handleToggle(user.id)}>
            ID:{user.id}-Title:{user.title}
          </h3>
          {visible === user.id && <p>{user.content}</p>}
          {""}
        </div>
      ))}
    </div>
  );
}
export default test
