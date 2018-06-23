/**
 * An array of models. Except for url (AWS ip), everything else here is kind of
 * redundant. But we need it so we dont have to make a get_config call to all
 * running containers just get get a list of all models. Se we have duplicate
 * information for now.
 * @type {Array}
 */
const data = [
  {
    id: 'd50796da-87f2-4493-846e-6eeb498acc63',
    name: 'SqueezeNet',
    url: 'http://localhost:4000/api/',
    task_extended: 'ImageNet classification',
  },
  {
    id: '985c8604-1381-4ebf-85af-bfe32080fb55',
    name: 'CardiacFCN',
    url: 'http://localhost:4002/api/',
    task_extended: 'Segmenting the right ventricle in MRI',
  },
  {
    id: 'ccc16d36-d788-43eb-9e53-2125c97888df',
    name: 'CascadedFCN_Liver',
    url: 'http://localhost:4004/api/',
    task_extended: 'Liver and liver lesion segmentation',
  },
];
export default data;
