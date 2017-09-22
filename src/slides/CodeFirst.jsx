import React from 'react';

const transformEdit = `
export const transformEdit = (state, action) =>
  mergeEditingMenuCourses(
    mergeEdit(state, action),
    action
  );
`;

const mergeEdit = `
export const mergeEdit = (state, action) =>
  mergeMenu(mergeProduct(state, action), action)
  .setIn(['isEditing', 'subscriptionId'], action.payload.subscriptionId)
  .setIn(['isEditing', 'deliveryId'], action.payload.deliveryId);

export const mergeProduct = (state, action) =>
  state.setIn(['isEditing', 'product'], action.payload.product);
`;

const mergeEditingMenuCourses = `
const mergeEditingMenuCourses = (state, action) => {
  const courses = selectEditingMenuCourses(state);
  return mergeCourses(state, mealSwapEdit({
    courses: sortMenuCourses(courses, true),
    isMealSwapAvailable: action.payload.isMealSwapAvailable,
  }));
};

const selectEditingMenuCourses = state =>
  state.getIn(['menu', 'courses']) || new List();

const mergeCourses = (state, courses) =>
  state.setIn(['menu', 'courses'], courses);
`;

const sortMenuCourses = `
const sortMenuCourses = (unsortedCourses, isEditMode) => {
  const courses = unsortedCourses.sortBy(course => course.get('index'));

  if (isEditMode) {
    return sortMenuCoursesForEditMode(courses);
  }

  return sortMenuCourseForViewMode(courses);
};

const sortMenuCoursesForEditMode = courses =>
  courses
    .sortBy(course => !isCoursePremium(course))
    .sortBy(course => !isCourseRecommended(course));

    const sortMenuCourseForViewMode = (courses) => {
      const chosenCourses = courses
        .filter(course => isCourseChosen(course))
        .sortBy(course => !isCourseRecommended(course))
        .sortBy(course => !isCoursePremium(course));
      const premiumCourses = courses
        .filter(course => !isCourseChosen(course) && isCoursePremium(course))
        .sortBy(course => !isCourseRecommended(course));
      const otherCourses = courses
        .filter(course => !isCourseChosen(course) && !isCoursePremium(course))
        .sortBy(course => !isCourseRecommended(course));

      return chosenCourses.concat(premiumCourses).concat(otherCourses);
    };
`;

const CodeFirst = () => (
  <section>
    <h4>Code First</h4>
    <section>
      <pre>
        <code className="javascript" data-trim data-noescape>
          {transformEdit}
        </code>
      </pre>
    </section>
    <section>
      <pre>
        <code className="javascript" data-trim data-noescape>
          {mergeEdit}
        </code>
      </pre>
    </section>
    <section>
      <pre>
        <code className="javascript" data-trim data-noescape>
          {mergeEdit}
        </code>
      </pre>
    </section>
    <section>
      <pre>
        <code className="javascript" data-trim data-noescape>
          {mergeEditingMenuCourses}
        </code>
      </pre>
    </section>
    <section>
      <pre>
        <code className="javascript" data-trim data-noescape>
          {sortMenuCourses}
        </code>
      </pre>
    </section>
  </section>
);

export default CodeFirst;
