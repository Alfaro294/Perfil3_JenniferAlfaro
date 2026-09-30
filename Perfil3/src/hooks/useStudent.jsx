import { DATA } from '../data/student';

export default function useStudent() {
  const items = [
    { label: 'Nombre', value: DATA.nombre },
    { label: 'Carnet', value: DATA.carnet },
    { label: 'Sección y grupo', value: `Sección ${DATA.seccion} · Grupo ${DATA.grupo}` },
  ];

  return { student: DATA, items };
}
