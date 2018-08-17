/**
 * An array of models. Except for url (AWS ip), everything else here is kind of
 * redundant. But we need it so we dont have to make a get_config call to all
 * running containers just get get a list of all models. Se we have duplicate
 * information for now.
 * @type {Array}
 */
const models = [
  // {
  //   id: "ef562736-2539-43ec-81c0-40e0ff7d1f13",
  //   url: "http://localhost",
  //   api: ":4000/api/",
  //   viewer: ":4001",
  //   name: "CXRprognosis",
  //   task_extended: "Survival Classification from chest Xray"
  // }
  {
    id: 'd50796da-87f2-4493-846e-6eeb498acc63',
    url: 'http://52.91.176.186',
    api: ':80/api/',
    viewer: ':81',
    name: 'squeeze-net',
    task_extended: 'ImageNet classification',
  },
  {
    id: '6c7d087b-ad67-4e36-8210-28b445d4d11b',
    url: 'http://107.21.130.166',
    api: ':80/api/',
    viewer: ':81',
    name: 'alex-net',
    task_extended: 'ImageNet classification',
  },
];
export default models;
