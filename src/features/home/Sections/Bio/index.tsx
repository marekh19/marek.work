import type { FC } from 'react'

import { Section } from '@ui/Section'

export const Bio: FC = () => (
  <Section heading="Bio">
    <ol className="border-l border-gray-500">
      <li>
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-yellow-500" />
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">2021 - present</p>
        </div>
        <div className="mb-2 ml-4 mt-0.5">
          <h4 className="mb-1.5 font-extralight text-gray-800 dark:text-gray-50">
            ServiceNow/JavaScript developer at Accenture
          </h4>
        </div>
      </li>
      <li>
        <div className="flex-start flex items-center pt-1">
          <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-yellow-500" />
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">2022</p>
        </div>
        <div className="mb-2 ml-4 mt-0.5">
          <h4 className="mb-1.5 font-extralight text-gray-800 dark:text-gray-50">
            STRV Academy: Frontend (3&nbsp;months&nbsp;weekly&nbsp;training)
          </h4>
        </div>
      </li>
      <li>
        <div className="flex-start flex items-center pt-1">
          <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-yellow-500" />
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">2021</p>
        </div>
        <div className="mb-2 ml-4 mt-0.5">
          <h4 className="mb-1.5 font-extralight text-gray-800 dark:text-gray-50">
            Green Fox Academy bootcamp (5&nbsp;months&nbsp;full-time)
          </h4>
        </div>
      </li>
      <li>
        <div className="flex-start flex items-center pt-1">
          <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-yellow-500" />
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">2019 - 2021</p>
        </div>
        <div className="mb-2 ml-4 mt-0.5">
          <h4 className="mb-1.5 font-extralight text-gray-800 dark:text-gray-50">
            Direct Marketing Lead CZ&SK at IQVIA
          </h4>
        </div>
      </li>
      <li>
        <div className="flex-start flex items-center pt-1">
          <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-yellow-500" />
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">2017 - 2018</p>
        </div>
        <div className="mb-2 ml-4 mt-0.5">
          <h4 className="mb-1.5 font-extralight text-gray-800 dark:text-gray-50">
            QA Test Analyst at Wunderman Thompson
          </h4>
        </div>
      </li>
      <li>
        <div className="flex-start flex items-center pt-1">
          <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-yellow-500" />
          <p className="text-sm font-medium text-gray-900 dark:text-gray-50">1995</p>
        </div>
        <div className="mb-2 ml-4 mt-0.5">
          <h4 className="mb-1.5 font-extralight text-gray-800 dark:text-gray-50">
            Born in Prague, Czech Republic
          </h4>
        </div>
      </li>
    </ol>
  </Section>
)
