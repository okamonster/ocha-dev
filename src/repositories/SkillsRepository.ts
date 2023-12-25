import { firestore } from '@/libs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Skill } from '@/entitie/skill'

export default class FetchSkillsRepository {
  async fetchSkills() {
    const skillsSnapshot = getDocs(collection(firestore, 'skills'))
    const skills = (await skillsSnapshot).docs.map((doc) => {
      const skill = doc.data()
      return {
        name: skill.name,
        imageUrl: skill.imageUrl,
        categorie: skill.categorie,
        genle: skill.genle,
      } as Skill
    })
    const order = [
      'markup',
      'language',
      'framework',
      'library',
      'database',
      'runtime',
      'platform',
      'software',
      'other',
    ]
    return skills.sort(
      (a, b) => order.indexOf(a.categorie) - order.indexOf(b.categorie),
    )
  }
}
