export default function Gas() {
  return (
    <span
      id="gasTargetChart"
      data-highcharts-chart={0}
      style={{ overflow: "hidden" }}
    >
      <div
        id="highcharts-7mur81n-0"
        dir="ltr"
        className="highcharts-container "
        style={{
          position: "relative",
          overflow: "hidden",
          width: 80,
          height: 40,
          textAlign: "left",
          lineHeight: "normal",
          zIndex: 0,
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          userSelect: "none",
          touchAction: "manipulation",
          outline: "none",
        }}
      >
        <svg
          version="1.1"
          className="highcharts-root"
          style={{
            fontFamily:
              '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
            fontSize: 12,
          }}
          xmlns="http://www.w3.org/2000/svg"
          width={80}
          height={40}
          viewBox="0 0 80 40"
        >
          <desc>Created with Highcharts 9.1.2</desc>
          <defs>
            <clipPath id="highcharts-7mur81n-2-">
              <rect x={0} y={0} width={80} height={40} fill="none" />
            </clipPath>
          </defs>
          <rect
            fill="#ffffff"
            className="highcharts-background"
            x={0}
            y={0}
            width={80}
            height={40}
            rx={0}
            ry={0}
          />
          <rect
            fill="none"
            className="highcharts-plot-background"
            x={0}
            y={0}
            width={80}
            height={40}
          />
          <g className="highcharts-pane-group" data-z-index={0}>
            <path
              fill="#EEE"
              d="M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.98000000333334 L 51.9999940000005 27.988000002000007 A 12 12 0 0 0 28 28 Z"
              className="highcharts-pane "
              stroke="#cccccc"
              strokeWidth={1}
            />
          </g>
          <g
            className="highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid"
            data-z-index={1}
          >
            <path
              fill="none"
              strokeDasharray="none"
              data-z-index={1}
              className="highcharts-grid-line"
              d="M 28 27.999999999999996 L 20 27.999999999999996"
              opacity={1}
            />
            <path
              fill="none"
              strokeDasharray="none"
              data-z-index={1}
              className="highcharts-grid-line"
              d="M 52 28.000000000000004 L 60 28.000000000000007"
              opacity={1}
            />
          </g>
          <rect
            fill="none"
            className="highcharts-plot-border"
            data-z-index={1}
            x={0}
            y={0}
            width={80}
            height={40}
          />
          <g
            className="highcharts-axis highcharts-yaxis highcharts-radial-axis"
            data-z-index={2}
          >
            <path
              fill="none"
              className="highcharts-axis-line"
              data-z-index={7}
              d="M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.980000003333334 M 40 28 A 0 0 0 0 0 40 28"
            />
          </g>
          <g className="highcharts-series-group" data-z-index={3}>
            <g
              className="highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
              data-z-index="0.1"
              opacity={1}
              transform="translate(0,0) scale(1 1)"
              clipPath="url(#highcharts-7mur81n-2-)"
            >
              <path
                fill="rgb(223,83,83)"
                d="M 20 27.999999999999996 A 20 20 0 0 1 25.40694380142069 14.323644097015242 L 31.244166280852415 19.794186458209147 A 12 12 0 0 0 28 28 Z"
                sweep-flag={0}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="highcharts-point highcharts-color-0"
              />
            </g>
            <g
              className="highcharts-markers highcharts-series-0 highcharts-solidgauge-series"
              data-z-index="0.1"
              opacity={1}
              transform="translate(0,0) scale(1 1)"
              clipPath="none"
            />
          </g>
          <text
            x={40}
            textAnchor="middle"
            className="highcharts-title"
            data-z-index={4}
            style={{
              color: "#333333",
              fontSize: 18,
              fill: "#333333",
            }}
            y={24}
          />
          <text
            x={40}
            textAnchor="middle"
            className="highcharts-subtitle"
            data-z-index={4}
            style={{ color: "#666666", fill: "#666666" }}
            y={24}
          />
          <text
            x={10}
            textAnchor="start"
            className="highcharts-caption"
            data-z-index={4}
            style={{ color: "#666666", fill: "#666666" }}
            y={37}
          />
          <g
            className="highcharts-legend highcharts-no-tooltip"
            data-z-index={7}
          >
            <rect
              fill="none"
              className="highcharts-legend-box"
              rx={0}
              ry={0}
              x={0}
              y={0}
              width={8}
              height={8}
              visibility="hidden"
            />
            <g data-z-index={1}>
              <g />
            </g>
          </g>
          <g
            className="highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels"
            data-z-index={7}
          />
        </svg>
      </div>
    </span>
  );
}
