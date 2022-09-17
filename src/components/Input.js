function Input({onChange, value}) {
  return (
    <input onChange={onChange} value={value} placeholder="Введите задачу..."></input>
  );
}

export default Input;