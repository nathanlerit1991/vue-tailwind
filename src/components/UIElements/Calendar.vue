<template>
    <div class="calendar">

        
      <div class="header flex justify-center items-center">
        <button @click="previous" class="px-2 py-1">Prev Month</button>
        <h2 class="mx-8 text-xl font-bold">{{ current }}</h2>
        <button @click="next" class="px-2 py-1">Next Month</button>
      </div>



      <!-- <div class="controls flex justify-center items-center">
        <button @click="selectView('month')" class="px-2 py-1">Month</button>
        <button @click="selectView('week')" class="px-2 py-1">Week</button>
        <button @click="selectView('day')" class="px-2 py-1">Day</button>
      </div> -->
      <div class="days flex mt-6 p-3">
        <div v-for="day in days" :key="day" class="flex-1 text-center">{{ day }}</div>
      </div>
      <div :class="`dates-wrapper ${view}`" class="grid grid-cols-7">
        <div
          v-for="(item, index) in displayedDates"
          :key="index"
          class="date"
          :class="{ 'today': isToday(item.date), 'event': item.event.length > 0, 'exclude_date': item.exclude_date }"
        >
          <time>{{ item.day }}</time>
          <template v-if="item.event.length > 0">
            <div 
                v-for="(event_data, event_data_index) in item.event" :key="event_data_index" 
                :class="`event-sched mt-1 p-2 ${event_data.color}`"
            >
              <span>{{ event_data.title }}</span>
              <span>{{ event_data.time }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import moment from 'moment';

const currentDate = ref(moment());
const days = ref(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

let view = ref('month');
function selectView(selectedView) {
  view.value = selectedView;
}

const eventsData = ref([
  { startDate: '2024-03-05', endDate: '2024-03-07', title: 'Leave trying for a much more longer text date event', time: '8 AM - 1 PM', color: 'bg-red-100' },
  { startDate: '2024-04-04', endDate: '2024-04-07', title: 'New Year', time: '9 AM - 1 PM', color: 'bg-orange-100' },
]);

function getEvent(date) {
  const events = eventsData.value;
  const eventData = [];
  for (const event of events) {
    const startDate = moment(event.startDate);
    const endDate = moment(event.endDate);
    if (date.isBetween(startDate, endDate, null, '[]')) {
      eventData.push({
        title: event.title,
        time: event.time,
        color: event.color
      });
    }
  }
  return eventData;
}

const current = computed(() => {
  switch (view.value) {
    case 'day':
      return currentDate.value.format('dddd, MMMM') + ' ' + formatDate(currentDate.value) + ', ' + currentDate.value.format('YYYY');
    case 'week':
      const startOfWeek = moment(currentDate.value).startOf('week');
      const endOfWeek = moment(currentDate.value).endOf('week');
      return startOfWeek.format('MMMM') + ' ' + formatDate(startOfWeek) + ' - ' + endOfWeek.format('MMMM') + ' ' + formatDate(endOfWeek) + ', ' + endOfWeek.format('YYYY');
    case 'month':
      return currentDate.value.format('MMMM YYYY');
    default:
      return '';
  }
});

const displayedDates = computed(() => {
  const firstDayOfMonth = moment(currentDate.value).startOf('month');
  const lastDayOfMonth = moment(currentDate.value).endOf('month');

  // Determine the start and end dates for the grid
  const startGridDate = firstDayOfMonth.clone().startOf('week');
  const endGridDate = lastDayOfMonth.clone().endOf('week');

  const datesInGrid = [];
  
  // Loop through each date from start to end to populate the grid
  for (let date = startGridDate; date.isSameOrBefore(endGridDate); date.add(1, 'day')) {
    datesInGrid.push({ 
      date: date.format('YYYY-MM-DD'), 
      day: formatDate(date), 
      event: getEvent(date),
      exclude_date: date.isBefore(firstDayOfMonth, 'day') || date.isAfter(lastDayOfMonth, 'day')
    });
  }

  return datesInGrid;
});

function isToday(date) {
  return moment(date).isSame(moment(), 'day');
}

function previous() {
  switch (view.value) {
    case 'day':
      currentDate.value = moment(currentDate.value).subtract(1, 'day');
      break;
    case 'week':
      currentDate.value = moment(currentDate.value).subtract(1, 'week');
      break;
    case 'month':
      currentDate.value = moment(currentDate.value).subtract(1, 'month').startOf('month');
      break;
    default:
      break;
  }
}

function next() {
  switch (view.value) {
    case 'day':
      currentDate.value = moment(currentDate.value).add(1, 'day');
      break;
    case 'week':
      currentDate.value = moment(currentDate.value).add(1, 'week');
      break;
    case 'month':
      currentDate.value = moment(currentDate.value).add(1, 'month').startOf('month');
      break;
    default:
      break;
  }
}

function formatDate(date) {
  return moment(date).format('Do').replace(/\D/g, '');
}
</script>
