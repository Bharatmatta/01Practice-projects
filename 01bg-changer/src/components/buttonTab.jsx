export function ButtonTab({ colors, onChangeColor }) {
  function handleChangeColor(color) {
    onChangeColor(color);
  }

  return (
    <>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 border-2 border-solid flex items-center justify-center p-2 rounded-md">
        {colors.map(({ name, bgColor }, index) => {
          return (
            <button
              key={index}
              className={`${bgColor} p-2 border-2 border-solid rounded-md`}
              onClick={() => handleChangeColor(bgColor)}
            >
              {name}
            </button>
          );
        })}
      </div>
    </>
  );
}
