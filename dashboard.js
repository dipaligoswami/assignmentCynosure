const DATA = {
  stats: [
    { label: "Todays Meeting", value: 12, colorClass: "#006600", icon: "Icon Tag 3.png" },
    { label: "Todays Task", value: 12, colorClass: "#9D85F0", icon: "Icon Tag 2.png" },
    { label: "Total Pending task", value: 12, colorClass: "#FFA902", icon: "Icon Tag.png" },
    { label: "Todays Meeting", value: 12, colorClass: "#EF2F6E", icon: "Icon Tag 4.png" }
  ],
  upcomingEvents: [
    { startDate: "03", startMonth: "July", name: "Project Kickoff", desc: "The event details will come here in this lin...", time: "12:00 PM", endDate: "05", endMonth: "July" }
  ],
  todos: [
    { title: "Design Task Management ...", sub: "Task Management  •  By : Deepa Mclom", freq: "daily", starred: true },
    { title: "Design Wire frame", sub: "Task Management  •  By : Gourav sh", freq: "weekly", starred: false },
    { title: "Scope Document", sub: "Task Management  •  By : Gourav sh", freq: "monthly", starred: false },
    { title: "Document Creation", sub: "Task Management  •  By : Gourav sh", freq: "yearly", starred: false }
  ],
  meetings: [
    { name: "Team Stand-up Meeting", time: "09:15 AM - 09:15 AM", duration: "70 min" },
    { name: "Discussion with Client", time: "10:30 PM - 11:15 AM", duration: "70 min" },
    { name: "Interview Front end Developer", time: "11:30 AM - 01:00 PM", duration: "70 min" }
  ],
  feed: [
    {
      date: "Thursday, 26 Jun", items: [
        { title: "New Task Assigned", badge: "unread", desc: "You have been assigned a new task by Ramesh pandey (Team Lead) in the...", meta: "By : Ramesh Pandey | 12:30" },
        { title: "New Task Assigned", badge: "unread", desc: "You have been assigned a new task by Ramesh pandey (Team Lead) in the...", meta: "By : Ramesh Pandey | 12:30" },
        { title: "Travel management reached a Milestone", badge: null, desc: "Agenda of the meeting will be come here and also share your thoughts on th...", meta: "System generated | 12:32", milestone: true },
        { title: "Task Approved", badge: null, desc: "Your AppXchange task has been approved.", meta: "By : Ramesh Mclom | 14:27" }
      ]
    },
    {
      date: "Wednesday, 25 Jun", items: [
        { title: "You were added in a Project", badge: null, desc: "You have been added in Task management Project", meta: "By : Gourav sh | 14:27" }
      ]
    },
    {
      date: "Tuesday, 24 Jun", items: [
        { title: "Task Approved", badge: null, desc: "Your AppXchange task has been approved.", meta: "By : Ramesh Mclom | 14:27" }
      ]
    }
  ],
  projects: [
    { title: "Update Employee Contact ..", desc: "Ensure all employee contact details are up to date in the ESS portal. This includes phone numbers...", time: "09:30 PM – 10:00 AM", progress: 42, tasks: 11, activities: 86, complete: false },
    { title: "Approve Leave Requests", desc: "Review and approve pending leave applications submitted via the ESS portal. Ensure leave...", time: "09:30 PM – 10:00 AM", progress: 100, tasks: 12, activities: 65, complete: true },
    { title: "Generate Monthly Attendance Report", desc: "Generate and export the monthly attendance report for all departments...", time: "09:30 PM – 10:00 AM", progress: 65, tasks: 9, activities: 40, complete: false }
  ],
  tasksInReview: [
    { title: "Design Task Management ...", sub: "Submitted Yesterday  •  To : Deepa Mclom", status: "submitted" },
    { title: "Design Wire frame", sub: "Submitted Yesterday  •  To : Gourav sh", status: "submitted" },
    { title: "Scope Document", sub: "Submitted Yesterday  •  To : Gourav sh", status: "submitted" },
    { title: "Document Creation", sub: "Submitted Yesterday  •  To : Gourav sh", status: "submitted" },
    { title: "User Experience Research", sub: "Submitted Today  •  To : Deepa Mclom", status: "in-review" },
    { title: "Prototype Development", sub: "Submitted Today  •  To : Aakya el", status: "in-review" },
    { title: "Usability Testing Report", sub: "Submitted Today  •  To : Deepa Mclom", status: "in-review" },
    { title: "Design System Documentation", sub: "Submitted Today  •  To : ...", status: "in-review" }
  ]
};

const Components = {

  statCard(s) {
    return `
      <div class="stat-card">
        <div class="stat-card-icon">
          <img class="stat-card-icon-img" src="${s.icon}" alt="${s.label}">
        </div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-value" style="color: ${s.colorClass};">${s.value}</div>
      </div>`;
  },

  upcomingEvents(ev) {
    return `
      <div class="upcoming-events-card">
        <div class="section-title-row">
          <div class="section-title">Upcoming Events</div>
          <div class="nav-arrows">
            <div class="nav-arrow js-ev-prev"><i class="bi bi-chevron-left"></i></div>
            <div class="nav-arrow active js-ev-next"><i class="bi bi-chevron-right"></i></div>
          </div>
        </div>
        <div class="event-item">
          <div class="event-date-box">
            <div class="event-date-num">${ev.startDate}</div>
            <div class="event-date-month">${ev.startMonth}</div>
          </div>
          <div class="event-info">
            <div class="event-name">${ev.name}</div>
            <div class="event-desc">${ev.desc}</div>
            <div class="event-time-row">
              <i class="bi bi-clock" style="font-size:10px;"></i> ${ev.time}
            </div>
          </div>
          <div class="event-end-date">
            <div class="event-end-num">${ev.endDate}</div>
            <div class="event-end-month">${ev.endMonth}</div>
          </div>
        </div>
      </div>`;
  },

  todoList(todos) {
    const items = todos.map(t => `
      <div class="todo-item">
        <span class="todo-star ${t.starred ? 'starred' : 'normal'}">
          <i class="bi bi-star${t.starred ? '-fill' : ''}"></i>
        </span>
        <div class="todo-info">
          <div class="todo-title">${t.title}</div>
          <div class="todo-sub">${t.sub}</div>
        </div>
        <span class="badge-freq badge-${t.freq}">${t.freq.charAt(0).toUpperCase() + t.freq.slice(1)}</span>
      </div>`).join('');

    return `
      <div class="widget-card">
        <div class="widget-header">
          <div class="section-title">To Do List</div>
          <div class="d-flex align-items-center gap-2">
            <div class="filter-select js-today-toggle">
              Today <i class="bi bi-chevron-down" style="font-size:10px;"></i>
            </div>
            <button class="add-btn js-add-todo">+</button>
          </div>
        </div>
        <div id="todoItems">${items}</div>
      </div>`;
  },

  meetingWidget(meetings) {
    const items = meetings.map(m => `
      <div class="meeting-item">
        <div>
          <div class="meeting-name">${m.name}</div>
          <div class="meeting-time">
            <i class="bi bi-clock" style="font-size:10px;"></i> ${m.time}
          </div>
        </div>
        <div class="meeting-duration">
          <i class="bi bi-clock" style="font-size:11px;"></i> ${m.duration}
        </div>
      </div>`).join('');

    return `
      <div class="widget-card">
        <div class="widget-header">
          <div class="section-title">Meeting</div>
          <div class="d-flex align-items-center gap-2">
            <div class="filter-select">
              Today <i class="bi bi-chevron-down" style="font-size:10px;"></i>
            </div>
            <button class="add-btn">+</button>
          </div>
        </div>
        <div>${items}</div>
      </div>`;
  },

  feedWidget(feedData) {
    let feedHtml = '';
    feedData.forEach(group => {
      feedHtml += `<div class="feed-date-sep">${group.date}</div>`;
      group.items.forEach(item => {
        const badge = item.badge
          ? `<span class="feed-badge ${item.badge}">${item.badge.charAt(0).toUpperCase() + item.badge.slice(1)}</span>`
          : '';
        const milestoneImg = item.milestone
          ? `<div class="feed-milestone-img"><span><img src="noto_confetti-ball.png"/></span></div>`
          : '';
        const unreadClass = item.badge === 'unread' ? ' feed-item-unread' : '';
        feedHtml += `
          <div class="feed-item${unreadClass}">
            <div class="feed-item-header">
              <span class="feed-item-title">${item.title}</span>
              ${badge}
            </div>
            <div class="feed-item-desc">${item.desc}</div>
            ${milestoneImg}
            <div class="feed-item-meta">${item.meta}</div>
          </div>`;
      });
    });

    return `
      <div class="widget-card">
        <div class="widget-header">
          <div class="section-title">Feed</div>
          <span style="font-size:11px; color:#64748b; margin-left:4px;">2</span>
        </div>
        <div class="feed-tabs">
          <div class="feed-tab-group">
            <button class="feed-tab active js-feed-tab" data-tab="all">View All</button>
            <button class="feed-tab js-feed-tab" data-tab="unread">Unread (2)</button>
          </div>
          <button class="mark-all-btn">Mark all as read</button>
        </div>
        <div class="feed-scroll">${feedHtml}</div>
      </div>`;
  },

  ongoingProjects(projects) {
    const items = projects.map(p => {
      const barClass = p.complete ? 'full' : '';
      const progressLabel = p.complete ? 'Complete' : 'Progress';
      return `
        <div class="project-item">
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
          <div class="project-time">
            <i class="bi bi-clock" style="font-size:10px;"></i> ${p.time}
          </div>
          <div class="progress-label">
            <span>${progressLabel}</span>
            <span>${p.progress}%</span>
          </div>
          <div class="custom-progress">
            <div class="custom-progress-bar ${barClass}" style="width:${p.progress}%"></div>
          </div>
          <div class="project-footer">
            <div class="avatars-stack">
              <div class="av av-1">A</div>
              <div class="av av-2">B</div>
              <div class="av av-3">C</div>
            </div>
            <div class="project-meta">
              <span><i class="bi bi-check2-square"></i> ${p.tasks} tasks</span>
              <span><i class="bi bi-lightning-fill"></i> ${p.activities} Activities</span>
            </div>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="widget-card">
        <div class="widget-header">
          <div class="section-title">Ongoing Projects</div>
        </div>
        <div>${items}</div>
      </div>`;
  },

  tasksInReview(tasks) {
    const items = tasks.map(t => {
      const badgeClass = t.status === 'submitted' ? 'badge-submitted' : 'badge-in-review';
      const badgeLabel = t.status === 'submitted' ? 'Submitted' : 'In Review';
      return `
        <div class="review-item">
          <div class="review-info">
            <div class="review-title">${t.title}</div>
            <div class="review-sub">${t.sub}</div>
          </div>
          <span class="badge-status ${badgeClass}">${badgeLabel}</span>
        </div>`;
    }).join('');

    return `
      <div class="widget-card">
        <div class="widget-header">
          <div class="section-title">Tasks in Review</div>
        </div>
        <div>${items}</div>
      </div>`;
  }

};

function renderDashboard() {
  DATA.stats.forEach(s => $('#statsRow').append(Components.statCard(s)));
  $('#statsRow').append(`<div>${Components.upcomingEvents(DATA.upcomingEvents[0])}</div>`);

  const $topWidgets = $('<div class="top-widgets-grid"></div>');
  $topWidgets.append(Components.todoList(DATA.todos));
  $topWidgets.append(Components.meetingWidget(DATA.meetings));

  const $bottomWidgets = $('<div class="bottom-widgets-grid"></div>');
  $bottomWidgets.append(Components.ongoingProjects(DATA.projects));
  $bottomWidgets.append(Components.tasksInReview(DATA.tasksInReview));

  $('#mainPanel').append($topWidgets).append($bottomWidgets);
  $('#feedPanel').append(Components.feedWidget(DATA.feed));
}

function openSidebar() {
  $('#sidebar').css('transition', 'transform 0.3s').addClass('open');
  $('<div id="sidebar-backdrop"></div>').appendTo('body');
}

function closeSidebar() {
  $('#sidebar').css('transition', 'transform 0.3s').removeClass('open');
  $('#sidebar-backdrop').remove();
}

function animateProgressBars() {
  $('.custom-progress-bar').each(function () {
    const target = $(this).css('width');
    $(this).css('width', '0').animate({ width: target }, 800);
  });
}

$(document).ready(function () {

  renderDashboard();
  animateProgressBars();

  $('[data-bs-toggle="tooltip"]').each(function () {
    new bootstrap.Tooltip(this, { placement: 'right' });
  });

  // animate stat numbers on load
  $('.stat-value').each(function () {
    const $el = $(this);
    const target = parseInt($el.text(), 10);
    $({ count: 0 }).animate({ count: target }, {
      duration: 800,
      easing: 'swing',
      step: function () { $el.text(Math.ceil(this.count)); },
      complete: function () { $el.text(target); }
    });
  });

  // sidebar nav active state
  $(document).on('click', '.sidebar-icon', function () {
    $('.sidebar-icon').removeClass('active');
    $(this).addClass('active');
  });

  // mobile sidebar
  $(document).on('click', '#mobile-nav-toggle', function () {
    $('#sidebar').hasClass('open') ? closeSidebar() : openSidebar();
  });

  $(document).on('click', '#sidebar-backdrop', closeSidebar);

  // feed tabs
  $(document).on('click', '.js-feed-tab', function () {
    $('.js-feed-tab').removeClass('active');
    $(this).addClass('active');
    const tab = $(this).data('tab');
    $('.feed-item').each(function () {
      if (tab === 'unread') {
        $(this).toggle($(this).find('.feed-badge.unread').length > 0);
      } else {
        $(this).show();
      }
    });
  });

  $(document).on('click', '.mark-all-btn', function () {
    $('.feed-badge.unread').animate({ opacity: 0 }, 300, function () {
      $(this).remove();
    });
  });

  // add todo
  $(document).on('click', '.js-add-todo', function () {
    const count = DATA.todos.length + 1;
    const newTodo = { title: `New Task ${count}`, sub: 'Task Management  •  By : You', freq: 'daily', starred: false };
    DATA.todos.push(newTodo);
    const html = `
      <div class="todo-item" style="display:none;">
        <span class="todo-star normal"><i class="bi bi-star"></i></span>
        <div class="todo-info">
          <div class="todo-title">${newTodo.title}</div>
          <div class="todo-sub">${newTodo.sub}</div>
        </div>
        <span class="badge-freq badge-daily">Daily</span>
      </div>`;
    $('#todoItems').append(html);
    $('#todoItems .todo-item:last').slideDown(300);
  });

  // star toggle
  $(document).on('click', '.todo-star', function () {
    const $icon = $(this).find('i');
    const isStarred = $icon.hasClass('bi-star-fill');
    $icon.toggleClass('bi-star', isStarred).toggleClass('bi-star-fill', !isStarred);
    $(this).toggleClass('starred', !isStarred).toggleClass('normal', isStarred);
  });

  // create button pulse
  $(document).on('click', '#btnCreate', function () {
    $(this).addClass('pulse');
    setTimeout(() => $(this).removeClass('pulse'), 400);
  });

  // event nav arrows
  $(document).on('click', '.js-ev-prev, .js-ev-next', function () {
    $('.nav-arrow').toggleClass('active');
  });

  // show/hide mobile toggle
  function checkMobile() {
    if ($(window).width() <= 767) {
      $('#mobile-nav-toggle').css('display', 'flex');
    } else {
      $('#mobile-nav-toggle').css('display', 'none');
      closeSidebar();
    }
  }

  checkMobile();
  $(window).on('resize', checkMobile);

});
