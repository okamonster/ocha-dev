import FetchSkillsRepository from '@/repositories/SkillsRepository'

export default class FetchSkillsUseCase {
  fetchSkillsRepository: FetchSkillsRepository

  constructor() {
    this.fetchSkillsRepository = new FetchSkillsRepository()
  }

  async execute() {
    return await this.fetchSkillsRepository.fetchSkills()
  }
}
