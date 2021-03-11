import 'reflect-metadata'
import { Handler, SQSEvent } from 'aws-lambda'
import Container from 'typedi'
import builder from '#framework/common/builder'
import { CompanyController } from '#adapter/controllers/companyController'
import { SendCompanyEmailInput } from '#adapter/serializers/company/sendEmailInput'

export const handler: Handler = async (event: SQSEvent) => {
  const record = event.Records[0]
  console.info('[I] RECORD QUEUE DATA', record)
  const body = JSON.parse(record.body || '{}')
  console.info('[I] RECORD QUEUE BODY', body)
  const companyController = Container.get(CompanyController)
  return builder.response(await companyController.sendEmail(new SendCompanyEmailInput(body)))
}
