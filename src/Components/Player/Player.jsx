import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setPlayerName(event.target.value);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  const [playerName, setPlayerName] = useState(initialName);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnName = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        placeholder={initialName}
        onChange={handleChange}
      />
    );
    btnName = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnName}</button>
    </li>
  );
}
