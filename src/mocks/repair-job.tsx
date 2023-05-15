export const repairJob = {
  vmrs: '013-010-001 Brake System - Full Air',
  complaint:
    'Vivamus aliquet orci nulla, nec rhoncus velit tempus nec. Mauris turpis lectus, porta in tristique sed, auctor vel felis. In luctus quam id dolor volutpat, vel  posuere lacus laoreet. Praesent pharetra erat velit, a sollicitudin massa pellentesque ut. Mauris eget finibus augue, nec feugiat magna. Aliquam suscipit  blandit lacus, vel mattis neque sodales ornare. Morbi tempor tristique cursus. Vestibulum posuere, risus et tristique rhoncus, leo nibh condimentum enim,  eget fringilla quam augue vel arcu.',
  repairReason:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus massa leo, at pharetra lectus dapibus non.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac leo fringilla metus pulvinar laoreet et ut est. Fusce ornare est vitae eros dictum, ut varius lacus posuere. Quisque a finibus elit. Suspendisse volutpat dolor faucibus justo suscipit suscipit ut vel felis. Duis efficitur vestibulum velit at porttitor.'
};

export const repairJobs = [1, 2, 3].map((i) => ({
  id: i,
  ...repairJob
}));
