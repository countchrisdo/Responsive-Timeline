const jsonData = [
    {
      month: "August, 2011",
      entries: [
        {
          date: "21, Tuesday",
          events: [
            {
              iconClass: "fa fa-asterisk text-success",
              title: "Event Title 1",
              details: [
                { label: "Details A", value: "Info" },
                { label: "Details B", value: "Europe" },
                { label: "Details C", value: "11/11/1111" },
              ],
            },
            {
              iconClass: "fa fa-pencil text-info",
              title: "Event Title 2",
              details: [
                { label: "Details A", value: "Info" },
                { label: "Details B", value: "Europe" },
                { label: "Details C", value: "11/11/1111" },
              ],
            },
          ],
        },
        {
          date: "22, Wednesday",
          events: [
            {
              iconClass: "fa fa-pencil text-info",
              title: "Event Title",
              details: [
                { label: "Details A", value: "Info" },
                { label: "Details B", value: "Europe" },
                { label: "Details C", value: "11/11/1111" },
              ],
            },
          ],
        },
      ],
    },
    {
      month: "September, 2018",
      entries: [
        {
          date: "21, Tuesday",
          events: [
            {
              iconClass: "fa fa-asterisk text-success",
              title: "Event Title",
              details: [
                { label: "Details A", value: "Info" },
                { label: "Details B", value: "Europe" },
                { label: "Details C", value: "11/11/1111" },
              ],
            },
            {
              iconClass: "fa fa-pencil text-info",
              title: "Event Title",
              details: [
                { label: "Details A", value: "Info" },
                { label: "Details B", value: "Europe" },
                { label: "Details C", value: "11/11/1111" },
              ],
            },
          ],
        },
        {
          date: "22, Wednesday",
          events: [
            {
              iconClass: "fa fa-pencil text-info",
              title: "Event Title",
              details: [
                { label: "Details A", value: "Info" },
                { label: "Details B", value: "Europe" },
                { label: "Details C", value: "11/11/1111" },
              ],
            },
          ],
        },
        {
          date: "22, Thursday",
          events: [
            {
              iconClass: "fa fa-pencil text-info",
              title: "Event Title",
              details: [
                { label: "Details A", value: "Info" },
                { label: "Details B", value: "Europe" },
                { label: "Details C", value: "11/11/1111" },
              ],
            },
          ],
        },
      ],
    },
  ];
  
  function generateHTML(data) {
    let html = '<div class="container"><div class="timeline">';
  
    data.forEach((monthData) => {
      html += `<div class="timeline-month">${monthData.month} <span>${monthData.entries.length} Entries</span></div>`;
  
      monthData.entries.forEach((entry) => {
        html += `<div class="timeline-section"><div class="timeline-date">${entry.date}</div><div class="row">`;
  
        entry.events.forEach((event) => {
          html += `<div class="col-sm-4">
                      <div class="timeline-box">
                        <div class="box-title">
                          <i class="${event.iconClass}" aria-hidden="true"></i>
                          ${event.title}
                        </div>
                        <details class="box-content">
                          <summary class="btn btn-xs btn-default pull-right">Details</summary>`;
  
          event.details.forEach((detail) => {
            html += `<div class="box-item"><strong>${detail.label}</strong>: ${detail.value}</div>`;
          });
  
          html += `</details>
                    <div class="box-footer">- Footer</div>
                  </div>
                </div>`;
        });
  
        html += `</div></div>`;
      });
    });
  
    html += `</div></div></div>`;
    return html;
  }
  
  const body = document.querySelector("body");
  body.innerHTML = generateHTML(jsonData);
  