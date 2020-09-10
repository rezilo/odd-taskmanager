/* eslint-disable no-plusplus */
import createSiteMenuTemplate from './components/site-menu';
import createFilterTemplate from './components/filter-menu';
import createSortingModuleTemplate from './components/sorting';
import createTaskEditTemplate from './components/task-edit';
import createTaskTemplate from './components/task-template';
import createLoadMoreButtonTemplate from './components/load-more';

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createSortingModuleTemplate());

const boardElement = siteMainElement.querySelector('.board');
const taskListElement = boardElement.querySelector('.board__tasks');

const TASK_COUNT = 3;

render(taskListElement, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate());
}

render(boardElement, createLoadMoreButtonTemplate());
