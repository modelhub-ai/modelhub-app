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
    url: 'http://localhost',
    api: ':4000/api/',
    viewer: ':4001',
    name: 'SqueezeNet',
    task_extended: 'ImageNet classification',
  },
  {
    id: '985c8604-1381-4ebf-85af-bfe32080fb55',
    url: 'http://localhost',
    api: ':4002/api/',
    viewer: ':4003',
    name: 'CardiacFCN',
    task_extended: 'Segmenting the right ventricle in MRI',
  },
  {
    id: 'ccc16d36-d788-43eb-9e53-2125c97888df',
    url: 'http://localhost',
    api: ':4004/api/',
    viewer: ':4005',
    name: 'CascadedFCN_Liver',
    task_extended: 'Liver and liver lesion segmentation',
  },
];
export default models;
