function Easter() {
  return (
  <div className="easter">
    <div className="overlay"></div>
    <div className="easterContainer">
      {
        Array(60).fill("block").map(
          () => {return (
            <svg className="shape" viewBox="0 0 100 115" preserveAspectRatio="xMidYMin slice">
              <clipPath id="hexagonClip">
                <polygon points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75" />
              </clipPath>
              <polygon points="50 -75, 175 126, -75 126" fill="none" stroke="transparent" stroke-width="5">
              </polygon>
              <polygon points="" fill="none" stroke="hsl(320,100%,70%)" stroke-width="5">
                <animate attributeName="points" repeatCount="indefinite" dur="4s" begin="0s" from="50 57.5, 50 57.5, 50 57.5" to="50 -75, 175 126, -75 126"></animate>
              </polygon>
              <polygon points="" fill="none" stroke="hsl(240,100%,70%)" stroke-width="5">
                <animate attributeName="points" repeatCount="indefinite" dur="4s" begin="1s" from="50 57.5, 50 57.5, 50 57.5" to="50 -75, 175 126, -75 126"></animate>
              </polygon>
              <polygon points="" fill="none" stroke="hsl(160,100%,70%)" stroke-width="5">
                <animate attributeName="points" repeatCount="indefinite" dur="4s" begin="2s" from="50 57.5, 50 57.5, 50 57.5" to="50 -75, 175 126, -75 126"></animate>
              </polygon>
              <polygon points="" fill="none" stroke="hsl(80,100%,70%)" stroke-width="5">
                <animate attributeName="points" repeatCount="indefinite" dur="4s" begin="3s" from="50 57.5, 50 57.5, 50 57.5" to="50 -75, 175 126, -75 126"></animate>
              </polygon>
            </svg>
          )
          })
      }
      {Array(5).map(e => e)}
    </div>
  </div>)
}

export default Easter;