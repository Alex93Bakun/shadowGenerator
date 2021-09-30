$(function () {
  const cssShadow = ({
    fontSize,
    offsetX,
    offsetY,
    blur,
    opacity,
    color,
    rgba,
  }) => {
    const cssStyle = `${offsetX}px ${offsetY}px ${blur}px ${rgba}`;
    $("h1").css("text-shadow", cssStyle);
    $("#resultHex").val(
      ` background-color: ${color};\n opacity: ${opacity};\n font-size: ${fontSize}px;`
    );
    $("#resultRgba").val(
      ` text-shadow: ${offsetX}px ${offsetY}px ${blur}px ${rgba};\n font-size: ${fontSize}px;`
    );
  };

  cssShadow({
    fontSize: 40,
    offsetX: 4,
    offsetY: -1,
    blur: 0,
    opacity: 1,
    color: "#ff0000",
    rgba: "rgba(250,0,0,1)",
  });

  $(document).on("input change", "input", () => {
    const fontSize = $("#fontSize").val();
    const offsetX = $("#offsetX").val();
    const offsetY = $("#offsetY").val();
    const blur = $("#blur").val();
    const opacity = $("#opacity").val();
    const color = $("input[type='color']").val();
    const red16 = `${color[1]}${color[2]}`;
    const blue16 = `${color[3]}${color[4]}`;
    const green16 = `${color[5]}${color[6]}`;
    const red10 = parseInt(red16, 16);
    const blue10 = parseInt(blue16, 16);
    const green10 = parseInt(green16, 16);
    const rgba = `rgba(${red10}, ${blue10}, ${green10}, ${opacity})`;

    $("h1").css("font-size", `${fontSize}px`);
    cssShadow({
      fontSize: fontSize,
      offsetX: offsetX,
      offsetY: offsetY,
      blur: blur,
      opacity: opacity,
      color: color,
      rgba: rgba,
    });
  });
});
